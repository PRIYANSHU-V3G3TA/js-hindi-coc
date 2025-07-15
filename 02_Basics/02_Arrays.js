const marvel_heroes=["Thor","IRONMAN","SPIDERMAN"]
const dc_heroes=["SUPERMAN","BATMAN","FLASH"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
//Returns the existing array with the pusged element as the array element 

//we use concat to avoid this
const all=marvel_heroes.concat(dc_heroes);
console.log(all);
//WE can also use the spread operator just as the concat operator
const all1=[...marvel_heroes,...dc_heroes]
console.log(all1);

const new1=[1,2,3,[4,5,6],7,[8,[9,10,11]],12]
const new2=new1.flat(Infinity)
console.log(new2);

//Data Scraping
console.log(Array.isArray("Priyanshu"));
//To make an array
console.log(Array.from("Priyanshu"));
console.log(Array.from({name:"Bittu"}));

let score=192
let score1=180
let score2=172
console.log(Array.of(score,score1,score2));


