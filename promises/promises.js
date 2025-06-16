// Promise is an object

const promiseOne = new Promise(function(resolve, reject){
  //Do an async task
  //DB Calls, cryptography, network call
  setTimeout(function(){
    console.log("Async Task is Completed")
    resolve()
  },1000)
})

promiseOne.then(function(){
  console.log("Promise Consumed")
})


new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async Task 2 is Completed")
    resolve()
  },1000)
}).then(function(){
  console.log("Promise 2 resolved")
})


const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task 3 Completed")
    resolve({
      username: "shoryasethia",
      email: "shorya.sethia@iitb.ac.in"
    })
  },1000)
})

promiseThree.then(function(user){
  console.log(user)
})


const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({
        username: "shoryasethia",
        password: "123456789"
      })
    }
    else{
      reject('ERROR: Something went wrong in promiseFour')
    }
  },1000)
})


// then chaining
promiseFour.then((user)=>{
  console.log(user)
  return user.username
}).then(function(username){
  console.log(username)
}).catch(function(error){
  console.log(error)
}).finally(()=> console.log("The promiseFour either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({
        username: "shoryasethia",
        password: "123456789"
      })
    }
    else{
      reject('ERROR: Something went wrong in promiseFour')
    }
  },1000)
})

// async does same work of .then .catch
async function consumePromiseFive(){
  try {
    const response = await promiseFive 
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()