//Constructor Method,Creates Singleton instances
//Object.create

//Symbols
const mySym=Symbol("Key1")
//object Literals

const js_User={//Keys:Values
    name:"Priyanshu",
    "full name":"B2 Chakraborty",
    [mySym]:"Key1",//Declaring Symbol in Objects
    age:21,
    location:"Bhubaneshwar",
    email:"B2@gmail.com",
    isLoggedin:false,
    lastLoggedin:["Monday","Tuesday","Wednesday"]
}

//To access
console.log(js_User.email);

//Another way-Good approach
console.log(js_User["email"]);

//We can't access full name using Dot Operator
console.log(js_User["full name"]);
console.log(typeof js_User[mySym]);//String beczuse it  accesses the value, which is "Key1" — a string.
console.log(typeof mySym);

//Change Values
js_User.age=22;

//Freeze value
// Object.freeze(js_User);
// console.log(js_User);
js_User.age=18
console.log(js_User);

//add Greetings
js_User.greeting=function(){
    console.log("Hello User");
    
}
console.log(js_User.greeting);//Returns refrence of the function
console.log(js_User.greeting());//Executes the function
js_User.greeting2=function(){
    console.log(`Hello User ${this.name}`);
    
}
console.log(js_User.greeting2());




