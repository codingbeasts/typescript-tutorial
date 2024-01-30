console.log("\n\n\n\n\t\t\t\tIntroduction to typescript");
let character:string = "mario";

console.log(character);

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  console.log(input);
});

// const btn_add = document
//   .getElementById("add")
//   ?.addEventListener("click", function () {
//     console.log("hello, how are you?");
//   });

// Type Basics
console.log("\n\n\n\n\t\t\t\tType basics");
// let character = "mario";

let age:number = 39;
let isprogrammer:boolean = true;

character = "";

console.log(character);

//giving type to variable at time of calling
const circle_area = function (radius: number) {
  return Math.PI * Math.pow(radius, 2);
};

console.log(circle_area(3));

const circle_circum = function (radius: number) {
  return 2 * Math.PI * radius;
};

console.log(circle_circum(3));

// Objects and arrays
console.log("\n\n\n\n\t\t\t\tObject and arrays");

//creating array but can't change type of it because in typscript array can be only of one type.
let names = ["jatin", "dipanshu", "siddhanth"];

names.push("lakshay");

//defining mixed array to interpolate later
let mixed = ["kumar", null, 34, false];

mixed[3] = true;
console.log(mixed);

//creating object using new Object
var dipanshu:object = new Object({
  firstName: "dipanshu",
  lastName: "shora",
  birthYear: 1997,
});

console.log(dipanshu);

//creating Object using .create method
let lakshay = Object.create(dipanshu, {
  firstName: { value: "lakshay" },
  lastName: { value: "vinayak" },
  birthyear: { value: 1998 },
  graduate: { value: true },
});

console.log(lakshay.lastName);
console.log(lakshay);

//creating a shallow copy of lakshay using Object.assign
let sagar= Object.assign({}, dipanshu,lakshay);
sagar.firstName = "sagar";
// sagar={
//     firstName:"sagar",
//     birthyear:1992
// }

console.log(sagar);

// Explicit types
console.log("\n\n\n\n\t\t\t\tExplicit types");
let details: string;
let isage: number;
let isLoggedIn: boolean;

isage = 39;
isLoggedIn = true;

let ninjas: string[] = []; //create array of string only

ninjas[0] = "dipanshu";

const mixedArray: (string | number | boolean | null)[] = []; //creating array of mix types

mixedArray[1] = "343";

console.log(isage, isLoggedIn, ninjas, mixedArray);
mixedArray[0] = false;
mixedArray[3] = "Simple Array";

let myobj: object;

myobj = {
  name: "dipanshu",
  age: 39,
};

// Dynamic Any keyword
console.log("\n\n\n\n\t\t\t\tDynamic any keyword");
let mix: any[] = [];

mixed[0] = "jatin";
mixed[1] = false;

console.log(mixed);

let ninja: { name: any; age: any };

ninja = { name: "hattori", age: 13 };
ninja.name = "awara";
ninja.age = "12";

console.log(ninja);

//  Functions basics

console.log("\n\n\n\n\t\t\t\tFunction basics");
let greet: Function;
greet = function () {
  console.log("hello");
};



const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};
add(5, 10, "20");

//types aliases

console.log("\n\n\n\n\t\t\t\tTypes aliases");

type stringOrnum = string | number;
type myobjProp = { name: string; uid: stringOrnum };

const logDetails = function (uid: stringOrnum, item: string) {
  console.log(`${item} has a uuid of ${uid}`);
};

const greeting = function(user:myobjProp){
    console.log(`${user.name} say hello!`);
};

const hudoin = function(user:myobjProp){
    console.log(`${user.name} asking how are you?`);
};

logDetails("s9283","jackfruit");

var dip:{
    name:string,
    uid:stringOrnum
}
dip ={
    name:"dipanshu",
    uid:"8327dasf"
};

greeting(dip);

hudoin(dip);


// Function signature

console.log("\n\n\n\n\t\t\t\t Function Signature");

let happiness:(cty:string,ix:number)=>string; //created a function signature to element types error

happiness = function(country:string,index:number){ //explicity call types of argument
    return `${country} has a index of ${index}`;
}

console.log(happiness("America",90));


let calcMyage:(by:number,py:number)=>number;

calcMyage = function(birthYear,presentYear){ //implicitly call types of argument
    return presentYear-birthYear;
};

console.log(typeof(calcMyage(1997,2023)));


