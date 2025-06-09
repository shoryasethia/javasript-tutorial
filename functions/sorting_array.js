// 📌 SORTING IN JAVASCRIPT

//1. Default sort (lexicographic - like strings)
const arr1 = [10, 5, 2];
arr1.sort(); // Incorrect for numbers
console.log(arr1); // Output: [10, 2, 5]

//2. Proper numeric sort using compare function
const arr2 = [10, 5, 2];
arr2.sort((a, b) => a - b); // Ascending
console.log(arr2); // Output: [2, 5, 10]

arr2.sort((a, b) => b - a); // Descending
console.log(arr2); // Output: [10, 5, 2]

//3. Sorting strings (default works correctly)
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

//4. Sorting array of objects by a key
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 22 },
];

// Sort by age (ascending)
users.sort((a, b) => a.age - b.age);
console.log(users);

// Sort by name (alphabetical)
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);