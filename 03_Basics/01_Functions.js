// function sayMyname(){
//     console.log("My name is B2");
    
// }
// sayMyname()

// function add(num1,num2){//Here num1 and num2 are parameters
//     return num1+num2
// }
// console.log(add(3,4));//Here passed values are arguments
// console.log(add(3,"4"));//Converts both to String
// console.log(add(3,"a"));
// console.log(add(3,null));

//Undefined and "" is treated as false value
function loginmssg(username){
    if(username===undefined){
        console.log("please enter a username");
        return 
    }
    return`${username} just logged in`
}
console.log(loginmssg("Priyanshu"));
console.log(loginmssg());//If no value is passed then undefined is returned 
//If we dont know how many no of parameters are to be passed then we use rest operator
function calculateprice(val1,val2,...num){
    return num;
}
console.log(calculateprice(1,2,3,4,5,6));
//Passing object to a fuction
function handleobject(getObject){
    console.log(`Username is ${getObject.username} and sec is CSE${getObject.sec}`);
    
}
handleobject(user={username:"Priyanshu"
    ,sec:37
})
