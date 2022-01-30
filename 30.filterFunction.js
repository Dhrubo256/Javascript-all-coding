var a = [1, 2, 3, 4, 5, 6, 7, 8]
var filteredArray = a.filter(function (value) {
    return value % 2 === 0
})
console.log(filteredArray)

// *********************
// make your own filter function
array1 = [11, 20, 33, 40, 55, 60]
function myFilter(array) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(myFilter(array1))