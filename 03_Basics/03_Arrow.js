

//This->Refers to the current context
const user={
    username:"B2",
    price:111,
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomemessage();
// user.username="Vegeta"
// user.welcomemessage();
// console.log(this);


// function coc(){
//     let username="B2"
//     console.log(this.username);
//     //From above we get to know that we cant use this inside a function like we are using inside an object to get current reference
//     console.log(this);
//     //This gives about function
    
// }
// coc();

//ARROW FUNCTION

//Two ways to declare arrow function one is above and another one is
const add=(num1,num2)=>(num1+num2)
console.log(add(3,4));


//To return object
const obj=(num1,num2)=>{user:"B2"}
console.log(obj(3,4));
//This gives undefined so we have to wrap the object in the parenthesis only 

const obj2=(num1,num2)=>({user:"B2"})
console.log(obj2(3,4));

