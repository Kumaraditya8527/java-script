/*
primitive datatpyes
types: Number,String,boolean,BigInt,null,undefined,symbol
*/
const id=Symbol('abc')
const id2=Symbol("abc")

console.log(id===id2);


/*
reference types
type:array,function,object ==>dataype is object
*/

// const heros=["shaktiman","nagrraj","doga"]
// let myobj={
//     name:"aditya",
//     age:22,   
// }

// const myfunc=function(){
//     console.log("hello world");
// }

//******************************************************************************************************//

/*stack(primitive) and heap(non-primitive) */

let x="aditya"
let y=x
y="kumar"
console.log(x);
console.log(y);

let user1={
    email:"abc@gmail.com",
    upi:"xyx"
}

let user2=user1
user2.email="aditya@xyz"

console.log(user1.email);
console.log(user2.email);


