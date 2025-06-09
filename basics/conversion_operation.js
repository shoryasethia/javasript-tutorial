let score1 = "33"
let score2 = "33sdf"

let score1Num = Number(score1) // "33" is converted to 33
let score2Num = Number(score2) // "33sdf" is not a valid number, so it is converted to NaN

// console.log(score1Num, score2Num);
// console.log(typeof score1Num, typeof score2Num); // Output: 33 NaN


let score3 = null
let score4 = undefined

let score3Num = Number(score3) // null is converted to 0
let score4Num = Number(score4) // undefined is converted to NaN

// console.log(score3Num, score4Num);
// console.log(typeof score3Num, typeof score4Num); // Output: 0 NaN

let isLoggedIn = 1
let isLoggedInNum = Number(isLoggedIn) // 1 is converted to 1
let isLoggedInString = String(isLoggedIn) // 1 is converted to "1"
let isLoggedInBoolean = Boolean(isLoggedIn) // 1 is converted to true

// Boolean("") is converted to false
// Boolean("shorya") is converted to true


// -------------------Operations------------------

// Maths operations
// strings concatenation

// memes
// console.log("1" + 2); // "12" (string concatenation)
// console.log(1 + "2"); //  12 (string is converted to number)
// console.log("1" + "2"); // "12" (string concatenation)
// console.log(1 + 2); // 3 (number addition)
// console.log("1"+2+2) // "122" (string concatenation)
// console.log(1 + 2 + "1"); // "31" (number addition first, then string concatenation)
// console.log(1 + 2 + "1" + 2); // "312" (number addition first, then string concatenation)


console.log(true) //true
console.log(+true) //1
console.log(+"") //0


