// ARRAYS............

const myArray=[3,4,1,5,7]   // can input any data type in same array also..
console.log(myArray[2]);  // accessing index of array

//array methods.......

myArray.push(9);  //adds the new input at the end.
myArray.push("anshu");

console.log(myArray);

myArray.pop();  // removes the last element of array....

console.log(myArray);

myArray.unshift(10);  // adds the input at the stat of array...
console.log(myArray);

myArray.shift();  //removes the starting element of array..
console.log(myArray);

console.log(myArray.includes(7)); //just tells whether it is present in the array or not....
console.log(myArray.indexOf(7));  // gives  the index of the element...

const newArray=myArray.join();   // join changes the array to string and also joins the elements togather...
console.log(myArray);
console.log(newArray);
console.log(typeof(newArray));

// difference between slice and splice...........

console.log("input array: ",myArray);

const new1=myArray.slice(1,3); //do not changes the main array....
console.log(new1);
console.log("array after slice; ",myArray); 

const new2=myArray.splice(1,3);  // removes the element from the main array....
console.log(new2);
console.group("array after splice: ",myArray); 


