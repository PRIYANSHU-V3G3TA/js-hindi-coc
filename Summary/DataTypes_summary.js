//Primitive Data Type(CALL BY VALUE :-CHANGES IN COPY)
/* STRING,NUMBER,BOOLEAN,UNDEFINED,NULL,SYMBOL,BIGINT*/
//Dynamically Typed
/*You don’t declare data types for variables explicitly.

Variable types are determined at runtime, not during compilation.

The same variable can hold values of different types at different times.* */

//Non-Primitive(Reference)
//Array,Objects,Functions
//Object
let myObj={
    age:12,
    name:"Priyanshu"
}
//Function
const myFunc=function(){
    console.log("Hello World");
    
}
console.log(typeof myObj);
console.log(typeof myFunc);

