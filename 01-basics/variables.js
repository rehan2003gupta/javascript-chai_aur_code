// console.log("Hello, World!");
// console.log("This is a test file.");

const { Long } = require("mongodb");

// console.log("Let's see if this works.");
let ID;
ID = "12345";

// console.log(ID);
// const mydate = Date()
// console.log(mydate.toString());
// const num=10000000
// console.log(num.toExponential(2));
const mynum=[1,2,3,4,5,6,7]

const nums=mynum.map((num)=> num+1).map((num)=>num*10).filter((num)=> num/10)
console.log(nums);
