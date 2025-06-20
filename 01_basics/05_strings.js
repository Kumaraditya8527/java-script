const name="aditya"
const repocount=50

// console.log(name + repocount + "value"); //oudated syntax

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newstring=gameName.substring(0,4)
console.log(newstring);
const anotherstring=gameName.slice(-8,4)
console.log(anotherstring);

const str1="    hitesh    "
console.log(str1);
console.log(str1.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));
console.log(gameName.split('-'));    


