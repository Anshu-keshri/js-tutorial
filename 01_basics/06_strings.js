const firstName="anshu";
const lastName="kumar";

console.log(firstName+lastName); //but is nat used as good practice.

console.log(`my name is ${firstName} ${lastName}`);

// different method of writing string.

const name=new String('Anshu Kumar');

console.log(name);
//....NOW EXPLORING SOME IMPORTANT PROPERTIES OF STRING.....

console.log(name[0]);
console.log(name.length);
console.log(name.__proto__);  // need to know about it.
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('u'));

const newString=name.substring(0,7);  // in this we can not take any negative index..and if taken it would be considered lowest index or heighest.
console.log(newString);

const anotherString=name.slice(-11,7);  //can take -ve index.
console.log(anotherString);

const a="     anshu     ";
console.log(a); 
console.log(a.trim()); // remove the unused spaces. 
