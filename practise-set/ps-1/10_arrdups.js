const nums1 = [1,2,2,7,3,4,6,9,10,12,16,20]
const nums2 = [4,7,10,34,5,9,10,3,2,2]

let st = new Set()
const mpp = new Map()

for(let i=0;i<nums1.length;i++){
  mpp.set(nums1[i],(mpp.get(nums1[i]) ?? 0)+1)
}

for(let i=0;i<nums2.length;i++){
  if(mpp.has(nums2[i])) st.add(nums2[i])
}

console.log(typeof st) //object


console.log(`First array: ${nums1}`)
console.log(`Another array: ${nums2}`)
console.log(`Unique common numbers (ascending ): ${[...st].sort((a, b) => a - b)}`);