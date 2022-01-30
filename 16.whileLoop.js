// printing my name for 10 times
var i = 0
while (i < 10) {
    console.log((i + 1) + " Toqi Tahmid")
    i++
}
// sum of 1st 10 numbers
var i = 1
var sum = 0
while (i <= 10) {
    console.log(sum + " + " + i + " = " + (sum + i))
    sum = sum + i
    i++
}
console.log("result = " + sum)
// sum of even numbers of 1-10 numbers
var i = 1
var sum = 0
while (i <= 10) {
    if (i % 2 == 0) {
        console.log(sum + " + " + i + " = " + (sum + i))
        sum = sum + i
    }
    i++
}
console.log("result = " + sum)
// sum of odd numbers of 1-10 numbers
var i = 1
var sum = 0
while (i <= 10) {
    if (i % 2 == 1) {
        console.log(sum + " + " + i + " = " + (sum + i))
        sum = sum + i
    }
    i++
}
console.log("result = " + sum)
// 
isRunning = true
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log("Winner winner chicken dinner")
        isRunning = false
    }
    else {
        console.log("You have got " + rand)
    }
}