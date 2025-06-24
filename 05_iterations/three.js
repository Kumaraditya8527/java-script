//for of

const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);   
// }

const greetings="Hello World"

// for (const greet of greetings) {
//     console.log(greet);  
// }

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }

const myObj={
    'game1':'NFS',
    'game2':'spiderman'
}

for (const [key,value] of myObj) {
    console.log(key,':-',value);
}