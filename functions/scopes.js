// let a = 10
// const b = 20
// var c = 30

// // console.log(a)
// // console.log(b)
// // console.log(c)

// same function, why differently defined?
if(true){
  let a = 100
  const b = 200
  var c = 300
}

// // console.log(a) // ReferenceError: a is not defined
// // console.log(b) // ReferenceError: b is not defined
// console.log(c) // <--- 300
// // so don't use var, use let or const

// ------------------------------------------------------------ //

