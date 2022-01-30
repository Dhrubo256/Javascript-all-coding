var arr = [2, 4, 7, 3, 9, 12, 35]
var result = arr.find(function (value, index) {
    return value === 9
})
console.log(result)
// findIndex
var result2 = arr.findIndex(function (value) {
    return value === 9
})
console.log(result2)


// make your own find and findIndex function
var MyArray = [1, 4, 8, 45, 332, 67, 9, 543, 21]
function myFind(arr, cb) {
    for (var i = 0; i, arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
            // return i will be print index
        }
    }
}
var rslt = myFind(MyArray, function (value) {
    return value === 9
})
console.log(rslt)