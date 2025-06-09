const signCheck = (num) => {
  if(num===0) return "Zero"
  else if(num>0) return "Positive"
  return "Negative"
}

console.log(signCheck(-2))
console.log(signCheck(0))
console.log(signCheck(2))