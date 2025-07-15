const obj1={1:'a',2:'b'};
const obj2={3:'c',4:'d'}

// const obj3={obj1,obj2};
// console.log(obj3);//Add objects as element

// const obj3=Object.assign(obj1,obj2);
// console.log(obj3);

const obj3={...obj1,...obj2}
console.log(obj3);

//Nesting of Objects
const game={
    name:"BGMI",
    user:{
        ingame:{
            id:11234,
            ingamename:"VEGETA"
        }  
    }
} 
console.log(game.user.ingame.id);

//When data is brought from database it is brought in the form of array
const user=[{id:1,email:"B1@gmail.com"},{id:2,email:"B2@gmail.com"},{id:3,email:"B3@gmail.com"},{id:4,email:"B4@gmail.com"}]

//To access the above we use

console.log(user[1].id);

//To get Keys and Values from objects
console.log(Object.keys(obj1));
console.log(Object.values(obj1));

//Gives all keys and values as array
console.log(Object.entries(obj1));

//To check if the given object has the key or not

console.log(Object.hasOwnProperty(2));//Return a Boolean value
console.log(Object.hasOwnProperty(3));




