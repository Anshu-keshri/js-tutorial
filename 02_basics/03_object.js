// singleton--created using only constructors not by literals...
//constructor method--
//object.create

// object literals...

const mySym=Symbol("key1");

const jsUser={
    name:"anshu",
    age:18,
    email:"anshukeshri.com",
    location:"patna",
    favouriteHero:["iron man","thor"],
    "car":"mustang",
    //  mySym:"myKey1",
    [mySym]: "myKey1" // correct way to declare a symbol in an object...
}

console.log(jsUser.email); //not must suitable way...
console.log(jsUser["email"]);  //  best way to access any key of an object...

//  we can access it using jsUser.car......
console.log(jsUser["car"]);

// best important interview question ...... to access symbol from declared object..

console.log(jsUser[mySym]); // in square box we do not use double quote "".
console.log(typeof jsUser[mySym]); 

// we can change the value of object..

jsUser.email="anshukumar.com";
console.log(jsUser["email"]);

jsUser["name"]="keshri";
console.log(jsUser["name"]);

Object.freeze(jsUser) // now after this any change in elements of object will not happen.

jsUser["age"]=20;
console.log(jsUser["age"]); // output will be 18 not 20...



