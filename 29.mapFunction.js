// a map function modified an array and return to a new array
// but a foreach function modefied an original array
var arr = [1, 2, 3]
var sqrArray = arr.map(function (value) {
    return value * value
})
console.log(arr)
console.log(sqrArray)

// *********************
// make your own map function
var MyArray = [2, 4, 6]
console.log(MyArray)
function myMap(arr) {
    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i] * arr[i]
        newArray.push(temp)
    }
    return newArray
}
console.log(myMap(MyArray))