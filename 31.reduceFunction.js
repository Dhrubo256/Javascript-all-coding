// sum of every elements of an array
var arr = [1, 2, 3, 4, 5]
var sum = arr.reduce(function (prev, curr) {
    return prev + curr
}, 100)//here 100 is initial value (sum+100)
console.log(sum)

// max value from an array
var arr2 = [1, 2, 100, 3, 4, 5, 6]
var max = arr2.reduce(function (prev, curr) {
    return Math.max(prev, curr)
})
console.log(max)


// make your own reduce function
myArray = [564, 6, 2, 4, 6, 8, 10]
function myReduce(arr, cb, init) {
    for (var i = 0; i < arr.length; i++) {
        init = cb(init, arr[i])
    }
    return init
}
var mySum = myReduce(myArray, function (prev, curr) {
    return prev + curr
}, 0)
var myMax = myReduce(myArray, function (prev, curr) {
    return Math.max(prev, curr)
}, 0)
var myMin = myReduce(myArray, function (prev, curr) {
    return Math.min(prev, curr)
}, myArray[0])
console.log(mySum)
console.log(myMax)
console.log(myMin)