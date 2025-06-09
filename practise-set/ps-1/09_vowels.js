const str = "abcdefghijklmnopqrstuvwxyz"

const isVowel = (ch) => ((ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u') ? 1:0)

let cnt = 0;
for(const ch of str){
  cnt += isVowel(ch)
}

console.log(`Total vowel in ${str} are ${cnt}`)