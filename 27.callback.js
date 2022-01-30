function sample(a, b, cb) {
    var c = a + b //5 + 8 = 13
    var d = a - b //5 - 8 = -3
    var result = cb(c, d)
    return result
}
function sum(a, b) {
    return a + b // 13 + (-3) = 10
}
// addition  
console.log(sample(5, 8, sum)) //output = 10

// substraction
var result2 = sample(5, 8, function (c, d) {
    return c - d //13 - (-3) = 16
})
console.log(result2)//16
// multiply
var result3 = sample(5, 8, function (c, d) {
    return c * d //13 * (-3) = -39
})
console.log(result3) //-39
