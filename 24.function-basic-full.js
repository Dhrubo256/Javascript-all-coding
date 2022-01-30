// *******************************
// defining a function
function brushYourTeeth() {
    console.log("Take your brush to your hand")
    console.log("Clean your teeth")
    console.log("Gurglle with water")
}
brushYourTeeth()//calling a function
// *********************************
// parameters and argument
function add(num1, num2) { //function add(parameters)
    var result = num1 + num2
    console.log(result)
}
add(10, 80)
add(20, 300) //add(arguments)

// problem solving
var arr1 = [1, 3, 5, 55, 3, 24, 5, 5]
var arr2 = [2, 4, 6]
var arr3 = [7, 8, 9]
var arr4 = [2, 4]

function sumOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)
sumOfArray(arr4)

// **************************
// Argument object
function test(a, b, c) {
    console.log(arguments)
    console.log(JSON.stringify(arguments))
    console.log(typeof a)//undefined
}
// test() //output = [Argumrnts] {}
test(10, 20, 30) //output = [Argumrnts] {'0': 10, '1': 20, "2": 30}

function test2() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])//10,20,30
    }
}
test2(10, 20, 30)

// sum of all arguments
function test3() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}
test3(10, 20, 30)

// **********************************
// return something
function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum //return the sum
}
var result = addAll(1, 2, 3)
console.log(result)

function MyDetails(name, email) {
    return {
        name: name,
        email: email
    }
}
var Details = MyDetails("Toqi Tahmid", "tahmidh20204@gmail.com")
console.log(Details)

// *********************************
// function expression
var addition = function (a, b) {
    return a + b
}//anonimus function
var myAddition = addition
var AnotherAddition = myAddition(10, 20)
console.log(AnotherAddition)


// ****************************
// nested function
function something(greet, fullName) {
    function getFirstName() {
        if (fullName) {
            return fullName.split(" ")[0]
        }
        else {
            return ""
        }
    }
    var massage = greet + " " + getFirstName()
    console.log(massage)
}
something("Good Morning", "Toqi Tahmid Dhrubo")

// **********************
// function scoping
function x() {
    function y() {
        function z() {
            var a = 19
            console.log(a)
        }
        z()
    }
    y()
}
x()