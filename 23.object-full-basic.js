// *************************
// Object declaration(Literal and constructor)
// obj = {
//      "key/property":"value"
// }
// object literal
var obj = {
    "name": "tahmid",
    "address": "Narshindi"
}
obj.class = 10
console.log(obj)
console.log(typeof obj)//object
console.log(obj.address)//Narshingdi
// change the value 
var obj2 = {
    "name": "Dhrubo",
    "address": "Narshindi"
}
obj2.address = "Narshingdi sadar"
console.log(obj2)
// object constructor
var obj3 = Object()
obj3.a = 10
console.log(obj3)

var obj4 = new Object()
obj4.b = 20
console.log(obj4)


// ************************
// setting properties
var a = {
    x: 40
}
a.x = 50 //replacing new value with old value
console.log(a)
console.log(a.d)//d is no value of a. So it is undefined

var b = {
    a: 10
}
b["y"] = 100 //property y:100
console.log(b)


// ****************************
// access object
var point = {
    x: 10,
    y: 20,
    z: 30
}
console.log(point.x)
console.log(point.y)
console.log(point.z)
console.log(point.x + point.z)

console.log(point["x"])//we have to give there property name as string
console.log(point["z"])

// ****************************
// remove object properties
var a2 = {
    a: 10,
    b: 20,
    c: 40
}
delete a2.a //removing the a property from a2 variable
console.log(a2)


// **************************************
// comparing the object
var obj1 = {
    a: 10,
    b: 20
}
var obj2 = {
    a: 10,
    b: 20
}
console.log(obj1 === obj2) //false...because there memory location are not same (one is obj1 other is obj2)
// how can we compare 2 obj?
if (obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true)
}//true
// stringify 
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))//true


// *************************************
// iterate object properties and traverse object
var obj = {
    x: 40,
    y: 60,
    z: 75
}
console.log("z" in obj)//true..because "z" property is present in obj variable
console.log("p" in obj)//false...because "p" property is not present

var t = {
    a: 20,
    b: 30,
    c: 40
}
for (var i in t) {
    console.log(i + " : " + t[i])
}



// ***********************************
// object method
var myObj = {
    x: 10,
    y: 20,
    z: 40
}
console.log(Object.keys(myObj))//print all keys or properties as an array
console.log(Object.values(myObj))//print all values as an array
console.log(Object.entries(myObj))//print multidimensional array with properties and values

var obj2 = Object.assign({}, myObj)//cloning myObj
console.log(obj2)