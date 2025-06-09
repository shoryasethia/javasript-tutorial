let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

/*
Output:
Sat Jun 07 2025 17:19:28 GMT+0530 (India Standard Time)
Sat Jun 07 2025
2025-06-07T11:49:28.101Z
7/6/2025, 5:19:28 pm
object
*/

let timeStamp = myDate.getTime() //Date.now() also works
console.log(timeStamp) // 1717752568101 milliseconds since 1st Jan 1970

let curr = new Date()
console.log(Math.floor(curr / 1000)) // seconds since 1st Jan 1970
console.log(curr.getMinutes()) 
console.log(curr.getHours()) // 24 hour format
console.log(curr.getDay()) // 0-6 (0 is Sunday, 1 is Monday, etc.)
console.log(curr.getDate()) // 1-31
console.log(curr.getMonth()) // 0-11 (0 is January, 1 is February, etc.)  
console.log(curr.getFullYear()) // 4 digit year
