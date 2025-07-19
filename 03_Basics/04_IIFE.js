(function coc(){
    //named IIFE
    console.log("Hi");
    
})();
//write two IIFE together.We need to end the IIFE statement with semicolon inorder to stop the execution

//Also write it as an arrow function
(()=>{

    //Simple IIFE
    console.log("Hi,I am B2");
    
})();

//Passing  something to the function
((name)=>{
    console.log(`Hi there ${name}`);
    
})("Priyanshu");