function myJSONParse(jsonString) {
    // Regular expressions for tokenizing
    const tokenPatterns = {
        whitespace: /\s+/g,
        number: /-?\d+(\.\d+)?([eE][+-]?\d+)?/g,
        string: /"((?:\\.|[^"\\])*)"/g,
        boolean: /true|false/g,
        null: /null/g,
        punctuation: /[{}\[\],:]/g,
    };

    // Tokenize the input string
    function tokenize(str) {
        let tokens = [];
        let index = 0;

        while (index < str.length) {
            // Whitespace
            tokenPatterns.whitespace.lastIndex = index;
            let match = tokenPatterns.whitespace.exec(str);
            if (match && match.index === index) {
                index += match[0].length;
                continue;
            }

            // Number
            tokenPatterns.number.lastIndex = index;
            match = tokenPatterns.number.exec(str);
            if (match && match.index === index) {
                tokens.push({ type: 'number', value: parseFloat(match[0]) });
                index += match[0].length;
                continue;
            }

            // String
            tokenPatterns.string.lastIndex = index;
            match = tokenPatterns.string.exec(str);
            if (match && match.index === index) {
                tokens.push({ type: 'string', value: match[1] });
                index += match[0].length;
                continue;
            }

            // Boolean
            tokenPatterns.boolean.lastIndex = index;
            match = tokenPatterns.boolean.exec(str);
            if (match && match.index === index) {
                tokens.push({ type: 'boolean', value: match[0] === 'true' });
                index += match[0].length;
                continue;
            }

            // Null
            tokenPatterns.null.lastIndex = index;
            match = tokenPatterns.null.exec(str);
            if (match && match.index === index) {
                tokens.push({ type: 'null', value: null });
                index += match[0].length;
                continue;
            }

            // Punctuation
            tokenPatterns.punctuation.lastIndex = index;
            match = tokenPatterns.punctuation.exec(str);
            if (match && match.index === index) {
                tokens.push({ type: 'punctuation', value: match[0] });
                index += match[0].length;
                continue;
            }

            // If we reach here, it means we found an invalid character
            throw new SyntaxError(`Unexpected token at position ${index}`);
        }

        return tokens;
    }

    // Parsing functions
    function parseValue(tokens) {
        if (tokens.length === 0) {
            throw new SyntaxError("Unexpected end of input");
        }

        const token = tokens.shift();

        switch (token.type) {
            case 'number':
            case 'string':
            case 'boolean':
            case 'null':
                return token.value;
            case 'punctuation':
                if (token.value === '{') {
                    return parseObject(tokens);
                } else if (token.value === '[') {
                    return parseArray(tokens);
                }
                break;
        }

        throw new SyntaxError(`Unexpected token ${token.value}`);
    }

    function parseObject(tokens) {
        const obj = {};

        while (tokens.length > 0) {
            const token = tokens.shift();

            if (token.type === 'punctuation' && token.value === '}') {
                return obj;
            }

            if (token.type !== 'string') {
                throw new SyntaxError(`Expected string key but got ${token.value}`);
            }

            const key = token.value;

            const colon = tokens.shift();
            if (colon.type !== 'punctuation' || colon.value !== ':') {
                throw new SyntaxError(`Expected colon but got ${colon.value}`);
            }

            obj[key] = parseValue(tokens);

            const next = tokens[0];
            if (next.type === 'punctuation' && next.value === ',') {
                tokens.shift();
                continue;
            } else if (next.type === 'punctuation' && next.value === '}') {
                tokens.shift();
                return obj;
            } else {
                throw new SyntaxError(`Expected comma or closing brace but got ${next.value}`);
            }
        }

        throw new SyntaxError("Unexpected end of input");
    }

    function parseArray(tokens) {
        const arr = [];

        while (tokens.length > 0) {
            const next = tokens[0];

            if (next.type === 'punctuation' && next.value === ']') {
                tokens.shift();
                return arr;
            }

            arr.push(parseValue(tokens));

            const commaOrEnd = tokens[0];
            if (commaOrEnd.type === 'punctuation' && commaOrEnd.value === ',') {
                tokens.shift();
                continue;
            } else if (commaOrEnd.type === 'punctuation' && commaOrEnd.value === ']') {
                tokens.shift();
                return arr;
            } else {
                throw new SyntaxError(`Expected comma or closing bracket but got ${commaOrEnd.value}`);
            }
        }

        throw new SyntaxError("Unexpected end of input");
    }

    // Main parsing logic
    const tokens = tokenize(jsonString);
    const result = parseValue(tokens);

    if (tokens.length > 0) {
        throw new SyntaxError("Unexpected token after end of input");
    }

    return result;
}

// Testing the function
const testCases = [
    '{"name": "John", "age": 30, "isStudent": false, "courses": ["Math", "Science"], "address": {"city": "New York", "zip": "10001"}}',
    '[1, 2, 3, "four", true, false, null, {"nested": "object"}]',
    '"A simple string"',
    '42',
    'true',
    'null',
    '{"a": [1, 2, {"b": [3, 4]}]}'
];

testCases.forEach((testCase) => {
    try {
        console.log(myJSONParse(testCase));
    } catch (e) {
        console.error(`Error parsing JSON: ${testCase}`);
        console.error(e);
    }
});
