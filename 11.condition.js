// condition(if,else,else if)
// even or odd number
var n = 30
if (n % 2 == 0) {
    console.log("That is an Even number")
}
else {
    console.log("That is an odd number")
}

// GPA counting
var n = 60
if (n <= 100 && n >= 80) {
    console.log("A +")
}
else if (n < 80 && n >= 70) {
    console.log("A")
}
else if (n < 70 && n >= 60) {
    console.log("A-")
}
else if (n < 60 && n >= 50) {
    console.log("B")
}
else if (n < 50 && n >= 40) {
    console.log("C")
}
else if (n < 40 && n >= 33) {
    console.log("D")
}
else {
    console.log("Mama fail korso")
}
