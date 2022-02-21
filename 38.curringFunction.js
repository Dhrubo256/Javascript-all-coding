function add(a, b, c) {
    return a + b + c
}
// add(20, 30, 40)

// lets do the function in curring system :---
function curringAdd(d) {
    return function (e) {
        return function (f) {
            return d + e + f
        }
    }
}
var result = curringAdd(20)(30)(40)// a different way to call a curring function
console.log(result)