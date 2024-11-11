const age=18;
let city="patna";
var password="12345"; //not in use nowdays.
email="anshukeshri@gmail.com"; // we can use a variable without declearing it ...but not a good practice.

city="gaya";// we can change the value ....main difference between const and let.

//age=23;   //age is definded with const so we can't change its value.

console.log(age)
console.log(typeof(age))
console.log(city)
console.log(typeof(city))
console.log(email)
console.log(typeof(email))

console.table([age,city,password,email])

console.log(typeof(null)) //data type of null is object.
console.log((undefined)) // data type of undefined is undefined.