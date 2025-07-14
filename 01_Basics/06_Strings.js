// console.log("Hello"+"World");
// STRING INTERPOLATION
const name="Priyanshu"
const tier="Ace dominator"
console.log(`Hello my name is ${name} and my highest tier was ${tier}`);
const gameName=new String('B.G.M.I')
console.log(gameName);
console.log(gameName[0]);
//Accessing the prototype
console.log(gameName.__proto__);
console.log((gameName.length));
console.log(gameName.toUpperCase());//Original value is not changed
console.log(gameName.indexOf("G"));
//Check methods in mdn and console browser
const game=gameName.substring(0,2)
console.log(game);
//SLICE METHOD
const another=gameName.slice(-5,4)//Negative value means in reverse
console.log(another);
console.log(gameName.slice(-7,4));
console.log(gameName.slice(-8,4));
//TRIM && REPLACE
const newString="   Bittu      ";
console.log(newString.trim());
const url="https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20','-'));
console.log(url.includes("hitesh"))
const space="Priyanshu-Chakraborty"
console.log(space.split('-'));

