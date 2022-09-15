const arr = [1, 3, 2, 4, 5, 14, 6]


//map
const mappedArr = arr.map((a, i) => a * i)
//console.log(mappedArr)

//filter
const filteredArr = arr.filter(a => a % 2)
// console.log(filteredArr)

//reduce
const reducedValue = arr.reduce((acc, item) => acc + item, 0)
// console.log(reducedValue)

//forEach
arr.forEach(item => {
    // console.log(item % 3)
})

//join
//console.log(arr.join('--'))


//console.log(arr.includes(33))

const arr1 = [
    {
        name: 'x',
        age: 10
    },
    {
        name: 'y',
        age: 20
    },
    {
        name: 'a',
        age: 33
    },
    {
        name: 'b',
        age: -4
    }
]

// console.log(arr1.sort((a, b) => {
//     if (a.name === b.name) {
//         return 0
//     }
//     return a.name > b.name ? 1 : -1
// }))

// console.table(arr1)

// console.group('group')
//
// console.log(1)
// console.log(2)
//
// console.groupEnd()
//
// console.log(3)


