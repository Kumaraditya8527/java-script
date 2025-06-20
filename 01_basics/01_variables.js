const accountId=144553
let accountEmail="aditya@gmail.com"
var accountpass="123456"
accountCity="jaipur"// not a good practice 
let accountState

// accountId=2 //not allowed
accountEmail="abc@gmail.com"
accountpass="546783"
accountCity="delhi"
console.log(accountId);
/*
prefer not to use var
bcuz of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountpass,accountCity,accountState])
