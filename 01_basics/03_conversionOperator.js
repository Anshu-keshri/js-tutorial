let age="33";
let city="patna"

console.log(typeof(age))
console.log(typeof(age))


let convertToNumber=Number(age)

console.log(convertToNumber)

let convertToNum=Number(city)

console.log(typeof(convertToNumber))
console.log(typeof(convertToNum))
console.log(convertToNum)  //output will be NaN  mean  not a number.

//some confusing things when adding  strigs and number.

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2+3);
console.log(1+2+"2");
console.log(1+2+"2"+2);

console.log("abc"+2);
console.log(1+2+"abc");
