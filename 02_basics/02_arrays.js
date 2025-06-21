const marvel=["thor","ironman","superman"]
const dc=["superman","flash","batman"]

// marvel.push(dc) // pushed dc as a single element
// console.log(marvel);
// console.log(marvel[3][1]);

// const all=marvel.concat(dc)
// console.log(all);

const newhero=[...marvel,...dc] //spread operation
console.log(newhero);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real=another_array.flat(Infinity)
console.log(real);

console.log(Array.isArray("aditya"));
console.log(Array.from("aditya"));
console.log(Array.from({name:"hitesh"})); //intresting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
