// we have to print "Tahmid  Dhrubo" for 10 times
// for(initializing,condition,increement/decreement)

for (var i = 0; i < 100; i++) {
    console.log((i + 1) + " Tahmid Dhrubo")
}
// print 50-100 number
for (var i = 50; i <= 100; i++) {
    console.log(i)
}
// print some numbers deference of 100
for (var i = 0; i <= 1000; i += 100) {
    console.log(i)
}
// print even numbers from 0-100 number
for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
// print Odd numbers from 0-100 number
for (var i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}
// sum of 1-100 numbers
var sum = 0
for (var i = 1; i <= 10; i++) {
    console.log(sum + " + " + i + " = " + (sum + i))
    sum = sum + i
}
console.log("result = " + sum)
// sum of all even number of 1-100
var sum = 0
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(sum + " + " + i + " = " + (sum + i))
        sum = sum + i
    }
}
console.log("result = " + sum)
// sum of all Odd number of 1-100
var sum = 0
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(sum + " + " + i + " = " + (sum + i))
        sum = sum + i
    }
}
console.log("result = " + sum)