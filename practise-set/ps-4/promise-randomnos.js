console.log(`Script started at time: [${new Date().toLocaleString()}]`)
const nums = [13,41,20,1,69,35,231,1,2,3,0,-2,95,2]

const getSum = (arr) => {
  let sum = 0
  for(const num of arr){
    sum += num
  }

  return sum
}

new Promise(function(resolve,reject){
    setTimeout(() => {
      resolve({
        sum: getSum(nums), 
        time: new Date().toLocaleString()
      })
    },10000)
}).then(({sum,time})=>{
  console.log(`Got Sum is ${sum} at [${time}].`)
}).catch((error)=>{
  console.log("An error occurred: ", error.toString())
}).finally(()=>{
  console.log(`Either resolved or rejected.`)
})

/* Output:
Script started at time: [21/6/2025, 4:05:15 pm]
Got Sum is 511 at [21/6/2025, 4:05:25 pm].
Either resolved or rejected.
*/