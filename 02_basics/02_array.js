const marvel_heros=["thor","iron man","hulk"];
const dc_heros=["superman","flash"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

// wants to put secont array elements in breaked form ....

const allHeros=marvel_heros.concat(dc_heros); // it has limitation....that only one array is added at a time...
console.log(allHeros);

//better method...

const all_new_heros=[...marvel_heros,...dc_heros];  // called spreading method..and can merge multiple arrays at a time
console.log(all_new_heros);
console.log(all_new_heros);

//nested array......

const anotherArray=[2,3,6,[2,8,1],3,[9,[4,0,7]]];
const breakedArray=anotherArray.flat(3);

console.log(breakedArray);

// .isArray, .from , .of..........
console.log(Array.isArray("anshu"));
console.log(Array.from("anshu")); // created an array  having elements "anshu" from a string..........
console.log(Array.from({name:"anshu"})); // to learn more about it...........

a=100;
b="anshu";
c="200";

console.log(Array.of(a,b,c));  // created array from different sources.....