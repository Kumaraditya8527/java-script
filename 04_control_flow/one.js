//if 

const isUserLoggedIn=true
const temprature=41

if(temprature<50){
    console.log("temprature is less than 50");    
}
else{
    console.log("temprature is greater than 50");
}
console.log("executed");
// >,>=,<,<=,==,!=,===,!==

// const score=200

// if(score >100){
//     const power="fly"
//     console.log(`user power: ${power}`)    
// }
// console.log(`user power: ${power}`)    

// const balance=1000

// if(balance>500) console.log("test"),console.log("test2"); //don't use it

// if(balance<500){
//     console.log("less than 500");    
// }
// else if(balance<750){
//     console.log("less than 750");    
// }
// else if(balance<900){
//     console.log("less than 900");    
// }
// else{
//     console.log("less than 1200");
    
// }

const UserLoggedIn=true
const LoggedInFromGoogle=false
const LoggedInFromEmail=true
const debitCard=true


if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");    
}

if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("User logged in");    
}
