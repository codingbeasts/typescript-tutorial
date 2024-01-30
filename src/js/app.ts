import { hasFormatter } from "./interface/hasFormatter";
import payment from "./classes/payment";
import invoice from "./classes/invoice";
import { listTemplate } from "./classes/listTemplate";
import "../css/styles.css";
console.log("\n\n\n\n\t\t\t\tClasses");

//form
const form = document.querySelector(".new-item-form") as HTMLFormElement;
//input
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const detail = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
//list template
const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: hasFormatter; //create a object that has a format function
  let values: [string,string,number];
  values=[toFrom.value,detail.value,amount.valueAsNumber];
  type.value === "invoice"
    ? (doc = new invoice(...values))
    : (doc = new payment(...values));
    list.render(doc,type.value,'end');
});

// let docuOne: hasFormatter,docuTwo:hasFormatter;
// docuOne = new invoice('mario','web work',700);
// docuTwo = new payment('luigi','plumbing work',200);

// let docs:hasFormatter[] = [];
// docs.push(docuOne);
// docs.push(docuTwo);

// console.log(docs);
// const inv_1 = new invoice('jatin','work for amazon',7000);

// const inv_2 = new invoice('dipanshu','work for freelancing',2000);
// let invoices : invoice[] = [];

// invoices.push(inv_1);
// invoices.push(inv_2);

// invoices.forEach(inv =>{
//     console.log(inv.client,inv.details,inv.amount,inv.format());
// });

// interface isPerson{
//     name: string;
//     age: number;
//     speak(param:string):void;
//     spend(param:number):number;
// }

// const me: isPerson = {
//     name:"dipanshu",
//     age: 26,
//     speak:function(s){
//        return s;
//     },
//     spend:function(s){
//         return s;
//     }
// };

// const myname = me.name;
// console.log(`${myname} says ${me.speak('hi')}`);
// console.log(`${myname} has spend ${me.spend(4000)} rupees`);

// function greetPerson(person:isPerson){
//    console.log('hello',person.name);
// }
// greetPerson(me);
