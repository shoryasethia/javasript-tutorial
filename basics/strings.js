const firstName = "Shorya"
const lastName = " Sethia"

// console.log(firstName + lastName); // "Shorya Sethia"  // Outdated syntax, NOT RECOMMENDED

console.log(`${firstName} ${lastName}`); // "Shorya Sethia"  // Use $ and back ticks ` // its like f-strings in Python


// ------------------------------------------------------------------------------------------- //

let s = new String("shoryasethia")
console.log(s) // String { "shoryasethia" } // This is an object, not a primitive string
console.log(typeof s) // "object" // This is an object, not a primitive string
console.log(s[0]) // "s"
console.log(s[s.lenght-1]) // "a" // Accessing the last character
console.log(s.length) // 12 
console.log(s.toUpperCase()) // "SHORYASETHIA" 
console.log(s.toLowerCase()) // "shoryasethia"

console.log(s.charAt(0)) // "s" // Returns the character at index 0
console.log(s.indexOf("s")) // 0 // Returns the index of the first occurrence of "s"
console.log(s.lastIndexOf("s")) // 6 // Returns the index of the last occurrence of "s"
console.log(s.includes("shorya")) // true // Checks if "shorya" is present in the string
console.log(s.startsWith("shorya")) // true // Checks if the string starts with "shorya"
console.log(s.endsWith("sethia")) // true // Checks if the string ends with "sethia"


const newStr = s.substring(0, 6) // "shorya" // Extracts a substring from index 0 to 6 (not inclusive)
console.log(newStr) // "shorya"
console.log(s.slice(0, 6)) // "shorya" // Extracts a substring from index 0 to 6 (not inclusive)

//slice can also accept negative indices but substring cannot
console.log(s.slice(-6)) // "sethia" // Extracts the last 6 characters

const str = "   shorya   "
console.log(str.trim()) // "shorya" // Removes whitespace from both ends of the string
console.log(str.trimStart()) // "shorya   " // Removes whitespace from the start of the string
console.log(str.trimEnd()) // "   shorya" // Removes whitespace from the end of the string
console.log(str.repeat(3)) // "   shorya      shorya      shorya   " // Repeats the string 3 times


const temp = "https://shoryasethia.com//blog%20latest"
console.log(temp.replace('%20','-')) // "https://shoryasethia.com//blog-latest" // Replaces the first occurrence of '%20' with '-'
console.log(temp.replaceAll('%20','-')) // "https://shoryasethia.com//blog-latest" // Replaces all occurrences of '%20' with '-'

console.log(temp.split('/')) // ["https:", "", "shoryasethia.com", "", "blog%20latest"] // Splits the string by '/' and returns an array
console.log(temp.split('/').join('-')) // "https:-shoryasethia.com--blog%20latest" // Splits the string by '/' and joins it with '-'





