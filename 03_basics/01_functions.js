function sayMYname(){
    console.log("A");
    console.log("d");
    console.log("i");
    console.log("t");
    console.log("y");
    console.log("a"); 
}

// sayMYname()

// function add(num1,num2){
//     console.log(num1+num2);    
// }
function add(num1,num2){
    // let result=num1+num2
    // return result
    return num1+num2
}

const result=add(2,3)
// console.log(result);

function loginUsermessage(username="sam"){
    if(!username){
        console.log("please give a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUsermessage("hitesh"));
// console.log(loginUsermessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,500));

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const arr=[1,2,3,4,5]

function returnsecondvalue(getarr){
    return getarr[1]
}

// console.log(returnsecondvalue(arr));
console.log(returnsecondvalue([100,200,400,1000]));

