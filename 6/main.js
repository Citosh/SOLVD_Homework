// Task 1


const translations = {
	en: {
	greet: "Hello",
	intro: "Welcome to our website"
},
	fr: {
		greet: "Bonjour",
		intro: "Bienvenue sur notre site web"
	}
}

function localize (dunnoStrings, ...placeholders){  
    return placeholders.map(placeholder => translations[language][placeholder]).join(' ')
}


const language = "fr" // Change to "en" for English
const greeting = "greet"
const introduction = "intro"

// const localizedGreeting = localize`${greeting}`;
// const localizedIntroduction = localize`${introduction}`;

// // console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
// // console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")

// const localizedGreetingIntroduction = localize`${greeting} ${introduction}`
// console.log(localizedGreetingIntroduction)

// Task 2


function highlightKeywords(template, keywords) {
    return template.replace(/ \${(\d+)} /g, (_, value) => {
        if (keywords[value]) {
            return `<span class='highlight'>${keywords[value]}</span>`
        }
        return ''
    });
}
const keywords = ["JavaScript", "template", "tagged"]
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation."

const highlighted = highlightKeywords(template, keywords)
// console.log(highlighted)

// Task 3

function multiline (str){
    return str[0].split(/\n/).map((line, index) => `${index +1} ${line}`).join('\n')
}
const code = multiline`function add(a, b) {
return a + b;
}`
// console.log(code)

// Task 4


function debounce(func, delay) {
    return function(str) {
      window.clearTimeout(this.timeoutId)
      timeoutId = setTimeout(() => {
        func.call(this, str)
      }, delay)
    }
}
  

function debouncedSearch(query) {
	// Perform search operation with the query
	console.log("Searching for:", query);
}
  
const debouncedSearchHandler = debounce(debouncedSearch, 300);

const inputElement = document.getElementById("search-input");

inputElement.addEventListener("input", event => {
    debouncedSearchHandler(event.target.value);
});

// Task 5

function throttle(func, interval) {
    let lastExecution = 0

    return function(event) {
        const now = Date.now()
        if (now - lastExecution > interval) {
          func.call(this, event)
          lastExecution = now
        }
    }
}

function onScroll(event) {
    // Handle scroll event
    console.log("Scroll event:", event);
}
  
  const throttledScrollHandler = throttle(onScroll, 1000);
  
  window.addEventListener("scroll", throttledScrollHandler);
  

// Task 6


function curry(func, arity) {
    return function curried(...args) {
      if (args.length >= arity) {
        return func(...args);
      } else {
        return function(...nextArgs) {
          return curried(...args, ...nextArgs);
        }
      }
    }
  }


function multiply(a, b, c) {
	return a * b * c;
    }

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

// console.log("Result:", result); // Expected: 24