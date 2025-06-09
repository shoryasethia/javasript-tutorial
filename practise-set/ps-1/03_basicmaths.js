function calc(num1,num2){
  if(typeof num1 !== typeof num2){
    console.log("Invalid input")
  }
  else{
    console.log(`${num1} + ${num2} = ${num1+num2}`)
    console.log(`|${num1} - ${num2}| = ${Math.abs(num1-num2)}`)
    console.log(`${num1} * ${num2} = ${num1*num2}`)
    if(num2===0){
      if(num1 !== 0) console.log(`${num2} / ${num1} = ${num2 / num1}`)
      else console.log("Both numbers are 0, division can't be defined")
    }
    else{
      console.log(`${num1} / ${num2} = ${num1 / num2}`)
    }
  }
}

calc(-2,12)
calc(0,12)
calc(-2,0)
calc(0,0)