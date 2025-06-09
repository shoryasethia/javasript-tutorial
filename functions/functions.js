// function addTwoNumbers(a,b){
//   console.log(a+b)
// }

// addTwoNumbers(2,3) //5
// addTwoNumbers(2,"3") // "23"
// addTwoNumbers(2,null) // 2

// const result = addTwoNumbers(2,3) // 5
// console.log(result) // undefined // because we haven't returned anything




function addTwoNumbers(a,b){
  return a+b
}
const result = addTwoNumbers(2,3)
// console.log(result) // 5



// function loginUserMessage(username){
//   return `${username} just logged in`
// }

// const msg = loginUserMessage("Shorya") 
// // console.log(msg)  //Shorya just logged in
// console.log(loginUserMessage()) // undefined just logged in



function loginUserMessage(username = "Shorya"){
  if(!username){
    console.log("Username is required")
    return
  }

  return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Shorya"))




// ---------------------------------------------------- //

function calcCartPrice(num1, num2, ...num){
  return num
}
// console.log(calcCartPrice(200,300,500,700,2000)) //[ 500, 700, 2000 ]

const user = {
  username: "Shorya",
  price: 199
}

function handelObject(anyObj){
  console.log(`Username: ${anyObj.username} is considering item of Price: ${anyObj.price}`)
}
// console.log(handelObject(user)) 

