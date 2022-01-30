// it will check if it every elements are even number
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var result = arr.every(function (value) {
    return value % 2 === 0
})
console.log(result)//false


// it will check if it every elements are positive number
var arr2 = [1, -2, -5, -3, 2, 3, 4, 5, 6, 7, 8, 9]
var result2 = arr2.every(function (value) {
    return value >= 0
})
console.log(result2)//false
