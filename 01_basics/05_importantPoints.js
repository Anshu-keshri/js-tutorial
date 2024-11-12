// there are mainly two types of data type.....

//primitive

//...... 7 types: String,Boolean,Number,null,undefined,Symbol,Bigint.



//Reference  (non-primitive)

//array,objects,functions.

//js is a dynamic language as there is no need to declare type of variables.

const id=Symbol('123');
const accountId=Symbol('123');  //although both having same value but still they are not equal.

console.log(id);
console.log(accountId);

console.log(id===accountId); //prove that they both are not equal.