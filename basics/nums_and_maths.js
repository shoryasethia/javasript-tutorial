const num1 = 100
console.log(num1) // 100

const num2 = new Number(100)
console.log(num2) // Number { 100 } // This is an object, not a primitive number

console.log(num1 === num2) // false
console.log(num1 == num2) // true, because the value is the same  

console.log(typeof num1) // "number"
console.log(typeof num2) // "object" // This is an object, not a primitive number


console.log(num2.toString()) // "100" // Converts the number object to a string
console.log(num2.toFixed(2)) // "100.00" // Converts the number to a string with 2 decimal places
console.log(num2.toExponential(2)) // "1.00e+2" // Converts the number to exponential notation with 2 decimal places

const num3 = 100.932132
console.log(num3.toPrecision(4)) // "100.9" // Converts the number to a string with 4 significant digits
console.log(num3.toPrecision(3)) // "101" <--- [IMPORTANT]

const balance = 100000000000
console.log(balance.toLocaleString('en-US')) // "100,000,000,000.00" 
console.log(balance.toLocaleString('en-IN')) // "10,00,00,00,000.00" 

console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324

// ------------------------------------ MATHS ------------------------------------ //
console.log(Math) // Object Math {}
console.log(Math.abs(-10)) // 10
console.log(Math.ceil(10.1)) // 11
console.log(Math.floor(10.9)) // 10
console.log(Math.round(10.5)) // 11 
console.log(Math.PI) // 3.141592653589793
console.log(Math.sqrt(16)) // 4
console.log(Math.pow(2, 3)) // 8 // 2 raised to the power of 3
console.log(Math.random()) // Random number between 0 and 1
console.log(Math.random() * 10) // Random number between 0 and 10


const maxm = 20
const minm = 10
console.log(Math.floor(Math.random() * (maxm - minm + 1)) + minm) // Random number between 10 and 20
