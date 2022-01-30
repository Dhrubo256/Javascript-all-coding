// Nested loop
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
console.log("That is a piramid of number\n")
var n = 5
for (var i = 1; i <= n; i++) {
    var result = ""
    for (var j = 1; j <= i; j++) {
        result += j + " "
    }
    console.log(result)
}
// make square with *
// *****
// *****
// *****
console.log("\n")
console.log("That is a star square\n")
var n = 5
for (var i = 1; i <= n; i++) {
    var result = ""
    for (var j = 1; j <= n; j++) {
        result += "* "
    }
    console.log(result)
}