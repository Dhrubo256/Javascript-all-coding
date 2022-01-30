function greet(msg) {
    function say_msg(name) {
        return msg + ", " + name + '!'
    }
    return say_msg
}
var gm = greet('Good Morning')
var gn = greet('Good Night')

var msg = gm('Tahmid Dhrubo')
var msg2 = gn('Tahmid Dhrubo')
console.log(msg)
console.log(msg2)


// power math
function base(b) {

    return function (n) {
        var result = 1
        for (var i = 0; i < b; i++) {
            result = result * n
        }
        return result
    }
}
var base = base(10)
console.log(base(2)) //2 ** 10 = 1024