//Task 1

function customFilterUnique(array, callback) {
    const uniqueElements = {};
    const uniqueKeys = {};

    array.forEach(element => {
        const key = callback(element);

        if (!uniqueKeys[key]) { 
            uniqueKeys[key] = true;
            uniqueElements[key] = element;
        } else {
            delete uniqueElements[key]
        }
    });

    return Object.values(uniqueElements)
}

const arr1 = [
    { id: 1, name: "test" },
    { id: 2, name: "foo" },
    { id: 3, boo: 3 },
    { id: 2, isAdmin: false }
];
const arr2 = [1, 2, 'a', 'b', 2, 'b', 3];

// console.log(customFilterUnique(arr1, obj => obj.id)); // should return [{id: 1, name: 'test'}, {id: 3, boo: 3}]
// console.log(customFilterUnique(arr2, obj => obj)); // should return [1, 'a', 3]



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
    const intersec = []
    const map = {}

    brray.forEach(item => {
        map[item] = (map[item] || 0) + 1;
    })
    console.log(map)
    array.forEach(item => {
        if (map[item] && map[item] > 0) {
            intersec.push(item)
            map[item]--
        }
    })

    return intersec
}

const a = [1, 2, 3, 4, 5, 2, 'a'];
const b = ['a', 'b', 'c', 2, 'd', 'c', 3];
console.log(getArrayIntersection(a, b)); // Output: [2, 'a', 3]



function getArrayUnion(array, brray){
    return Array.from(new Set(array.concat(brray)))
}

// console.log(getArrayUnion([1,2,3,4],[3,4,5,6]))


//Task 1

function measureArrayPerformance(array, fn){
    console.time('Execution Time');
    fn(array)
    console.timeEnd('Execution Time');
}

const customMap = array => array.map(item => item)
const customfilter = array => array.filter(item => item)
const customReduce = array => array.reduce(item => item)
measureArrayPerformance([1,2,3,4],customShuffle)
measureArrayPerformance([1,2,3,4], customMap)
measureArrayPerformance([1,2,3,4], customfilter)
measureArrayPerformance([1,2,3,4], customReduce)
