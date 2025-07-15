//Constructor Method,Creates Singleton instances
//Object.create


//object Literals

const js_User={//Keys:Values
    name:"Priyanshu",
    "full name":"B2 Chakraborty",
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

