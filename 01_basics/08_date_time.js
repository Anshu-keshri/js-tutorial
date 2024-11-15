//.........DATES.........

const myDate=new Date();

//  different formats to print date...

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(typeof(myDate)); // object.

let createdDate=new Date(2023,0,21)   
console.log(createdDate.toDateString());



