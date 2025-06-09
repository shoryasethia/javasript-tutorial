// Make sure comparison is done between two things of same data type

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// === strict check : besides the value it also checks the data type
console.log(null === 0); // false
console.log(undefined === 0); // false
console.log(null === undefined); // false
console.log(null == undefined); // true


// SYMBOL
let x1 = Symbol('123')
let x2 = Symbol('123')
console.log(x1 === x2); // false, because each Symbol is unique

// BigInt
let bigInt1 = BigInt(1234567890123456789012345678901234567890);
let bigInt2 = BigInt(1234567890123456789012345678901234567890);
console.log(bigInt1 === bigInt2); // true, because they are the same BigInt value

// To represent a number as a BigInt, you can also use the 'n' suffix
let bigNumber = 234923942234234324232342342342n;
console.log(typeof bigNumber); // "bigint"


// Array
let myArr = ["hello", "bye", "cool"]

// Object
let myObj = {
    name: "Shorya",
    age: 21,
};


// Function
const hi = function(){
    console.log("hello world");
}


