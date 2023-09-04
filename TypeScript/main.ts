export {} //by adding export script treted as a module and tsc main.ts its converted in main.js then tsc main.ts --watch automatically found file changes..
let message="welcome back";
console.log(message);

let x=10;
const y=20;
//let x=30; we cannot  initialize same variable
let sum;//we can give the let variable withought initializing
//const title// with const we have to initialize any value other wise it gives error
const title="codeevolution";

//Variable type: boolean,any,number,string,unknown
let isbeginner:boolean= true;
let total:number=0;
let name:string ="vishwas"

let sentence:string =`My name is ${name}
I am a begineer in typescript `
console.log(sentence);


//null
let n:null =null;
let u:undefined =undefined;

let isNew:boolean=null;//we can assign null,undefined to any data type
let myName:string =undefined;

let list1: number[] =[1,2,3];
let list2: Array <number> =[1,2,3]; 


let Person:[string,number] =["chris",22];





enum color {Red,Green,Blue}
let c:color =color.Green;
console.log(c);


let randomValue:any =10;
randomValue =true;
randomValue ='vishwas'


let a;
a=10;
a=true;
 
let b=20;
let multitype:number|boolean
multitype=20;
multitype=true;

let anytype:any;
anytype:true;
anytype:20;


//function
//optional paramter
/*function add(num1:number,num2?:number):number
{
    if(num2)
    return num1+num2;
    else
    return num1;
}
add(5,10);
add(5);*/

//default paramter
/*function add(num1:number,num2:number=10):number
{
    if(num2)
    return num1+num2;
    else
    return num1;
}
add(5,10);
add(5);*/
/*function fullName(person:{firstName:string,lastName:string})
{
    console.log(`${person.firstName} ${person.lastName}`)
}
let p={
    firstName:'suresh',
    lastName:'Date'
}
fullName(p);*/
 
interface person{
    firstName:string;
    lastName:string;
}
function fullName(person:person)
{
    console.log(`${person.firstName} ${person.lastName}`)
}
let p={
    firstName:'suresh',
    lastName:'Date'
}
fullName(p)






