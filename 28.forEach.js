// traverse an array with foreach method
var arr = [81, 92, 74, 100, 40]
arr.forEach(function (value, index, array) {
    console.log(value, index, array)
})
// value = 81, 92, 74, 100, 40
// index = 0, 1, 2, 3, 4
// array = [81, 92, 74, 100, 40]

// **************
// sum of every element of an array

var arr2 = [1, 2, 3, 4, 5]
var sum = 0
arr2.forEach(function (v, i, arr) {
    sum += v
})
console.log(sum) // 15

// ***************
// make your own foreach method
var myArray = [11, 12, 13, 14, 15]
function forEach(array, cb) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i] + "" + i + "" + myArray)
    }
}