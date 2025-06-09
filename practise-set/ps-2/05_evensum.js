const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let sum = 0
for(const num of arr){
  if(!(num&1)) sum += num
}

console.log(`Sum of all even number in [${arr}] is ${sum}`)