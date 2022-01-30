// No -1
var name = ""
var fullName = ""
if (name.length == 0) {
    fullName = "Toqi Tahmid"
    console.log(fullName)
}
else {
    console.log(name)
}

// short hand of this code
var myName = ""
var myFullName = myName || "Toqi Tahmid Dhrubo"
console.log(myFullName)

// No -2
var isOk = true
if (isOk) {
    console.log("Everything is ok")
} else {
    console.log("Nothing is ok")
}

// with shorthand
var isFine = true
isFine && console.log("Everything is fine")
// if it is true than it will represent "everything is fine" otherwise nothing