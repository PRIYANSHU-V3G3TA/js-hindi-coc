// let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());  
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// let create=new Date(2025,2,27);
// console.log(create.toString());
 let date=new Date("2025-07-14")
// console.log(date.toLocaleString()); 
let myTime=Date.now();
console.log(myTime);
console.log(date.getTime());
//To seconds
console.log(Math.floor(Date.now()/1000));

//More Customization of .toLocaleString()
console.log(date.toLocaleString('default',{weekday:"long"}));








