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

const heros=["shaktiman","nagrraj","doga"]
let myobj={
    name:"aditya",
    age:22,   
}

const myfunc=function(){
    console.log("hello world");
}
