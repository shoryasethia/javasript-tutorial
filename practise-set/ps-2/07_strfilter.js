const arr = [
  "Hi, this side Shorya",
  "Shorya",
  "javascript",
  "js is different from java :)",
  "hello world",
  "abc",
  "try new",
  "C++ is better tbh",
  "",
  " ",
  "true",
  "hi"
]

const result = []
for(const str of arr){
  if(str.length > 5){
    result.push(str)
  }
}


console.log(result)