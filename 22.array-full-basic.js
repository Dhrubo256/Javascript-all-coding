// Array is a data structure where we can organize multiple data under a single variable
// **************************************
var arr = [1, 2, 3, 4, 5]
console.log(arr)
// we can exicute a specific data from a array
console.log(arr[3])// 4 [index=3]
arr[5] = 6 //just input 6 in index 5
arr[100] = 10
console.log(arr)
console.log(arr[56])//undefined

var arr2 = [1, 2, 3, 4, 5]
console.log(arr2.length)

var arr3 = Array(1, 2, 3, 4)
console.log(arr3)




// **************************************
// traversing an array
var array2 = [2, 3, 7, 4, 6, 8]
for (var i = 0; i < array2.length; i++) {
    console.log(array2[i])
}
// sum of each element of an array
var array2 = [2, 3, 7, 4, 6, 8]
var sum = 0
for (var i = 0; i < array2.length; i++) {
    sum = sum + array2[i]
}
console.log("Result = " + sum)
// even number of an array
var array2 = [2, 3, 7, 4, 6, 8]
for (var i = 0; i < array2.length; i++) {
    if (array2[i] % 2 == 0) {
        console.log(array2[i])
    }
}
// Odd number of an array
var array2 = [2, 3, 7, 4, 6, 8]
for (var i = 0; i < array2.length; i++) {
    if (array2[i] % 2 == 1) {
        console.log(array2[i])
    }
}




// **************************************
// inserting and removing elements from an array
// inserting
var arr = [1, 2, 3, 4, 5, 6, 6, 8]
// insert 9 to index 3
arr[3] = 9
// pushing to the last
arr.push(9)
// pushing to the first
arr.unshift(9)
console.log(arr)

// removing
// splice method
var arr2 = [12, 3, 5, 6, 7, 10]
arr2.splice(3, 0, 10)//the index where we wanna push,how much element we want to remove,which data we want to push
console.log(arr2)
// pop method
arr2.pop()//it will remove the last element
arr2.shift()//it will remove the first element



// **************************************
// search data from an array
var myArray = [1, 2, 3, "tahmid", 4, 5, 6, 8, 9]
var find = "tahmid"
var isfound = false
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == find) {
        console.log("yes!Data found in index " + i)
        isfound = true
        break
    }
}
if (!isfound) {
    console.log("Data Not Found")
}





// **************************************
// multidimensional array
var multiArr = [
    [78, 89, 90, 92],
    [67, 90, 92, 96],
    [100, 66, 56, 99]
]
console.log(multiArr[0][0])//78

for (var i = 0; i < multiArr.length; i++) {
    for (var j = 0; j < multiArr[i].length; j++) {
        console.log("Element " + i + ": " + multiArr[i][j])
    }
}



// **********************
// Array method
var a = [4, 5, 6, 7, 8, 9]
console.log(a.join("| "))

var b = [1, 2, 3, 4, 5, 6]
console.log(b.fill(0))

var c = [1, 2, 3, 4]
var d = [5, 6, 7, 8]
var merge_array = c.concat(d)
console.log(merge_array)

var e = [1, 2, 3, 4, 5]
console.log(Array.isArray(e))//true

var f = [1, 2, 3, 4, 5]
var newArray = Array.from(f)
console.log(newArray) //[1, 2, 3, 4, 5]