const user = {
  username: "shoryasethia",
  firstName: "Shorya",
  lastName: "Sethia",
  college: "IIT Bombay",
  github: "https://github.com/shoryasethia",
  linkedin: "https://www.linkedin.com/in/shorya-sethia-680b24250/",
  email: "shorya.sethia@iitb.ac.in",
  gender: "male",

}
// console.log(typeof user)

let keyArr = []
for(const key in user){
  keyArr.push(user[key])
}


console.log(Array.isArray(keyArr))
console.log(keyArr)