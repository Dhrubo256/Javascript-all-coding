// if the initializing value is false then the while loop will not exicute this code. But if we use do while loop it will run the code at least one time

// it will not exicute the code
// var isRunning = false
// while (isRunning) {
//     console.log("I'm Running")
// }

// but it will exicute for 1st time
var isRunning = false
do {
    console.log("I'm Running")
} while (isRunning)