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