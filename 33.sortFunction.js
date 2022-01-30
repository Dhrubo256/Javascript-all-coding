// ascending and descanding sorting
var persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]
var arr = [-2, -5, -4, -7, 4, 8, 1, 3, 6, 9, 2, 3, 5, 7, 8, 9, 1]
// sorting array
// if we change there condition it will a descanding sort
arr.sort(function (a, b) {
    if (a > b) {
        return 1
    }
    else if (a < b) {
        return -1
    }
    else {
        return 0
    }
})
console.log(arr)
// sorting the persons age
persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    }
    else if (a.age < b.age) {
        return -1
    }
    else {
        return 0
    }
})
console.log(persons)
