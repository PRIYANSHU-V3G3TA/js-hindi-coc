console.log(addone(5));

function addone(num){
    return num+1;
}
//If a variable holds the value of a function than calling of the function before it's declaration is not possible--->Mini Hoisting
// console.log(addtwo(5));

const num2=function addtwo(num){
    return num+2;
}
console.log(typeof num2);
console.log(num2);
//To call the addtwo function we need to pass value after writing num2
console.log(num2(2));

