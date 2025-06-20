// Dates

let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());

console.log(typeof(mydate));

// let newDate=new Date(2025,6,20,5,3)
// console.log(newDate.toDateString());

// let newDate=new Date("2023-01-14")
let newDate=new Date("01-14-2023")
console.log(newDate.toLocaleString());

let timeStamp=Date.now()
// console.log(timeStamp);
// console.log(newDate.getTime());

console.log(Math.floor(Date.now()/1000));

let date1=new Date()
console.log(date1.getMonth());
console.log(date1.getDay());




