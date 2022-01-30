// ********string********
var str = "Tahmid" //String literal
var str2 = 'Tahmid' //String literal
var str3 = `Tahmid` //String literal
var str4 = String("hello world") //String constructor
var str5 = String(123) //String constructor
var str6 = String(123.6775) //String constructor
var str7 = 10 + "" //String constructor
var num = 100
var str8 = num.toString() //String constructor
console.log(str4, str5, str6)



// *********String escape notation********
var str = "Toqi Tahmid 'Dhrubo'"
// var str = 'toqi tahmid 'dhurbo'' (that will throw error)
var str2 = "Toqi Tahmid \"Dhrubo\" " //wrapping with ""
var str3 = "Toqi Tahmid \nDhrubo " //making a new line
var str4 = "Toqi Tahmid \\Dhrubo " //show output with a backslash
var str5 = "Toqi Tahmid \tDhrubo " //make a tab


// ***********String comparison***********
var s = "abc"
var s2 = "bcd"
console.log(s < s2)
// Lexicographical order "z" is biggest number and "A" is smallest number
// another
console.log("001" == 1)//It will return true


// **********string methods***********
// concatenate string
var a = "My name is"
var b = "Tahmid"
var c = a.concat(" ", b)
console.log(c)
// substring method
var myName = "Tahmid Dhrubo"
console.log(myName.substring(7)) //It will return Dhrubo because the word Dhrubo started from index 7
// charAt method
var grocery = "ruti and rice"
console.log(grocery.charAt(2))//What is situated on index 2 in grocery
// endswith method and startswith method
var proverb = "Unity is strenth"
console.log(proverb.startsWith("Unity"))//true
console.log(proverb.endsWith("strenth"))//true
// Uppercase and lowercase method
a = "tahmid"
console.log(a.toUpperCase())
b = "Tahmid"
console.log(b.toLowerCase())
// trim method
console.log('          tahmid               '.trim())
// split method
a = "Toqi, Tahmid, Dhrubo"
console.log(a.split(", ")) // ["Toqi","Tahmid","Dhrubo"]

// ***************string type and length****************
string1 = "Hello everybody!"
console.log(typeof string1) //string
console.log(string1.length) //length = 16


// another way to see the length
string = "Tahmid Dhrubo"
len = 0
while (true) {
    if (string.charAt(len) == "") {
        break
    } else {
        len++
    }
}
console.log(len)