const arr=[0,1,true,"hitesh"]
//console.log(arr[3]);
const num=new Array(1,2,3,4);

//Methods********************

//ADD
// arr.push(6)
// console.log(arr); 

// //remove
// console.log(num.pop());

// //Add at first
// num.unshift(4);
// console.log(num);

// //Pop from first
// console.log(num.shift());

//Converts to String
// console.log(typeof arr);
// const newarr=arr.join();
// console.log(newarr);
// console.log(typeof newarr);

//SLice=>No changes in the original array
console.log("A ",arr);
const my1=arr.slice(1,3)
console.log(my1);
console.log("Slice ",arr);

//Splice=>Manipulates the original array
const my2=arr.splice(1,3);
console.log(my2);
console.log("Splice ",arr);







