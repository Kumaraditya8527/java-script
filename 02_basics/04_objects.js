// const tinderUser=new Object() // singleton object
const tinderUser={}

tinderUser.id="123xyz"
tinderUser.name="Aditya"
tinderUser.isLoggedIN=false


// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj3={5:"a", 6:"b"}

// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

const user=[
    {
        id:12,
        email:"xyz"
    },
    {

    },
    {

    },
    {

    }
]

user[1].email

// console.log(Object.keys(tinderUser));   //array
// console.log(Object.values(tinderUser)); //array
// console.log(Object.entries(tinderUser)); //arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIN'));

const course={
    coursename:"js in hindi",
    price:999,
    Instructor:"hitesh"
}
//destructuring 
// console.log(course.Instructor);

const {Instructor}=course
console.log(Instructor);

// {
//     "name":"aditya",     //json api
//     "price":"99"
// }

// [
//     {},
//     {},

// ]

