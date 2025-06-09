function createCounter(){
  let cnt = 0

  function increment(){
    cnt++
    return cnt
  }

  return increment
}

const val = createCounter();

console.log(val())
console.log(val())
console.log(val())
console.log(val())
console.log(val())
