var isRunning = true
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log("Winner winner chicken dinner")
        break
    }
    else {
        console.log("You have got " + rand)
    }
}
// a break statement break a loop depends on a condition