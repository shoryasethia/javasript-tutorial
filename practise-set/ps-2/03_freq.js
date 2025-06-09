const getFreq = (str) => {
  const freq = {}
  for(const ch of str){
    freq[ch] = (freq[ch] || 0)+1
  }

  return freq;
}


const str = "qnfomwdkmcskfjjcejwoiejdciomaczlksjeliakwxokaqmpqkdakspxkapexqex"
console.log(getFreq(str))