function add(a, b) {
    return a + b
}
function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    function multiply() {
        var m = func(a, b)
        return c * d * m
    }
    return multiply
}
var multiply = manipulate(3, 4, add)
// add = m = 3 + 4 = 7
// var c = a + b = 3 + 4 = 7
// var d = a - b = 3 - 4 = -1
// multiply = 7 * 7 * -1 = -49
console.log(multiply()) //output = -49