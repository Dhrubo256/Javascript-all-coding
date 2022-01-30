// Truthy value
var bool = true
var bool2 = Boolean("abc")
var bool3 = Boolean(324)
var bool4 = Boolean(["1", "2", "3", "4"])
var bl4 = Boolean([])
console.log(bool2)
console.log(bool3)
console.log(bool4)

// Falsy value
var bl1 = Boolean(false)
var bl2 = Boolean("")
var bl3 = Boolean(0)
var bl4 = Boolean(null)
var bl5 = Boolean(undefined)
var bl6 = Boolean(NaN)

console.log(bl1, bl2, bl3, bl4, bl5, bl6)