// if at least one element is even it will return true
var arr = [1, 2, 3, 4, 5, 6, 7]
var result = arr.some(function (value) {
    return value % 2 === 0
})
console.log(result)//true


// if at least one element is positive it will return true
var arr = [1, 2, 3, 4, 5, 6, 7, -2]
var result = arr.some(function (value) {
    return value > 0
})
console.log(result)//true