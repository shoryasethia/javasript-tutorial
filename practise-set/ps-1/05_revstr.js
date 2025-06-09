const str = "abcdefghijklmnopqrstuvwxyz"
let rev_str = ""

for (const ch of str){
  rev_str = ch + rev_str
}

console.log(rev_str)