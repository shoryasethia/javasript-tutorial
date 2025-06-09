// singleton is formed on constructor : Object.create()


// object literals : singleton is not formed

const mySym = Symbol("key1")

const jsUser = {
  name: "Shorya",
  age: 21,
  location: "Rajasthan",
  email: "shorya.sethia@iitb.ac.in",
  lastLogin: ["Monday","Wednesday"],
  [mySym]: "value1", //Usage of Symbol in object
}

console.log(jsUser.email)
console.log(jsUser["email"]) //Preferred

console.log(jsUser[mySym]) //Accessing Symbol property

// to freeze an object
Object.freeze(jsUser)


// ------------------------------------------------------ //

const jsUser2 = {
  name: "Shorya",
  age: 21,
  location: "Rajasthan",
  email: "shorya.sethia@iitb.ac.in",
  lastLogin: ["Monday","Wednesday"],
  [mySym]: "value1", //Usage of Symbol in object
}

jsUser2.greeting = function(){
  console.log( `Hello ${this.name}.`);
}

console.log(jsUser2.greeting())


// ------------------------------------------------------ //
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// json api response
// {
//     "name": "shorya",
//     "coursename": "js tutorial",
//     "price": "internet and youtube"
// }

// or we could get the value like this
// [
//     {},
//     {},
//     {}
// ]