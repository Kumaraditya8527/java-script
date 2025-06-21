//singleton
// Object.create

//object literals
const mysym=Symbol("key1")

const jsUser={
    name:"hitesh",
    "full name":"hitesh choudhary",
    [mysym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedin:false,
    lastlogindays:["monday","saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

jsUser["email"]="hietsh@chagpt.com"
// console.log(jsUser);
// Object.freeze(jsUser) // use cannot change values after freezing of object
// jsUser["email"]="xyx"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user")
}
jsUser.greeting2=function(){
    console.log(`hello js user,${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());


