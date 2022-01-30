// They all are number
var num = 1292837
var num2 = 23.232
var num3 = Number(393892)
var num4 = Number('45')

// float and integr convertion
var num1 = 12.71
console.log(Number.parseFloat(num1))
console.log(Number.parseInt(num1))
// showing the minimum and the maximum value
console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
// infinity value
console.log(1 / 0)//infinity
// NaN=(Not access number) value
console.log('abc' * 10)

// Null vs undefined
var abc //no value exicuted (Undefined)
var xyz = null //null

console.log(xyz)
console.log(abc)

// Octal and hexadecimal number
// Hexadecimal is a Base 16 number system
// Octal is a Base 8 number system
var hex = 0xff //start with 0x 
var oct = 0756 //start with 0
console.log(hex, oct)