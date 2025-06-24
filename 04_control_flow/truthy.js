const userEmail=[]

if (userEmail) {
    console.log("got user email");    
}
else{
    console.log("Don't have user email");    
}

//falsy values
// false,0,-0,"",null,undefined,NaN,BigInt 0n

//truthy values
// "0","false"," ",[],{},function(){}

if(userEmail.length ===0){
    console.log("Array is empty");
}

const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15
val1=null ??10 ?? 15

console.log(val1);

//terniary operator

//condition ? true:false

const price=100
price>=80?console.log("more than 80"):console.log("less than 80");



