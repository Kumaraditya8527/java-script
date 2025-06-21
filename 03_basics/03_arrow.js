const user={
    username:"hitesh",
    pprice:999,
    WelcomeMessage:function(){
        console.log(`${this.username}, just logged in`);
        console.log(this);
        
    }
}

// user.WelcomeMessage()
// user.username="sam"
// user.WelcomeMessage()

// console.log(this);

// function chai(){
//     let username="hitesh"
//     console.log(this.username);    
// }


// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);    
// }

const chai=() => {                     //Arrow function(remove function keyword and use =>)
    let username="hitesh"
    console.log(this);    
}
chai()

// const addtwo= (num1,num2)=>{
//     return num1+num2
// }
// const addtwo= (num1,num2)=>num1+num2    //implicit return(for single line statements)
// const addtwo= (num1,num2)=>(num1+num2)    
const addtwo= (num1,num2)=>({username:"hitesh"})    

console.log(addtwo(3,4));
