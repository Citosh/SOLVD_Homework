//Task 1

function customFilterUnique(array, callback){

    const filtered = callback(array)
    return Array.from(new Set(filtered))
} 

function getBiggerThanZero(arr){
    return arr.filter((item) => item > 0 )
}

const articles = [
    {ID : 45, name: 'artem', article: 'advanced array filtering'},
    {ID : 45, name: 'artem', article: 'object property validation'},
    {ID : 48, name: 'carlo', article: 'object deep cloning'},
    {ID : 51, name: 'lissandra', article: 'array shuffling'}
]

const getStudentsID = array => (array.filter(item => item.ID < 50 && (/^a/gi).test(item.article))).map(item => item.ID)

// console.log(customFilterUnique([1,2,-1,-2,1,1,1], getBiggerThanZero))
// console.log(customFilterUnique(articles, getStudentsID))

//Task 2


function chunkArray(array,chunkSize){
    const newArray = []
    for(let i = 0; i < array.length; i+= chunkSize){
        newArray.push(array.slice(i, i+chunkSize))
    }
    return newArray
}

// console.log(chunkArray([1,2,3,4],3))
//Task 3

function customShuffle(array) {
    const shuffledArray = array.slice()
    
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

// console.log( customShuffle([1,2,3,4,5]))
//Task 4


function getArrayIntersection(array, brray) {
    return array.filter((item) => brray.includes(item))
}

// console.log(getArrayIntersection([1,2,3,4], [2,3,4,5]))

function getArrayUnion(array, brray){
    return Array.from(new Set(array.concat(brray)))
}

console.log(getArrayUnion([1,2,3,4],[3,4,5,6]))


//Task 1

function measureArrayPerformance(array, fn){
    console.time('Execution Time');
    fn(array)
    console.timeEnd('Execution Time');
}

const customMap = array => array.map(item => item)

measureArrayPerformance([1,2,3,4],customShuffle)
measureArrayPerformance([1,2,3,4], customMap)