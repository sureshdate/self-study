//es5 function
// function greet(name){
//     return 'Hello '+name;
// }
// console.log(greet("ws cube tech"));

//es6 function
// let greet =(name)=>{
//     return 'Hello '+name;
// }
// console.log(greet("ws cube tech"));*/

// let greet =(name,age)=>{
//     return 'Hello '+name +"age is " +age;
// };
// console.log(greet("ws cube tech",10));

/*const sqr=num =>{
    return num*num;
}
console.log(sqr(5));*/

/*const sqr=num => num*num;

console.log(sqr(5))*/

//Template literal in ES6
//es5
/*var name="ws cube tech";
console.log("welcome to"+ name+ "!have a nice day" )*/

//es6
/*var name="ws cube tech";
console.log("welcome to ${name}!have a nice day" )*/

/*const name ="ws cube tech"
const res =`welcome
to
${name}!`;
console.log(res);*/

//Array and object Destructing in ES6
//ES5
var details={
    name:"ws cube tech",
    email:"suresh@gmail.com",
    contact:98765432
    
}
var name=details.name;
var email=details.email;
var contact =details.contact;
console.log(name);
console.log(email);
console.log(contact);

//Es6
var details={
    name:"ws cube tech",
    email:"suresh@gmail.com",
    contact:98765432
    
}
const{name,email,contact}=details;//destructured
console.log(name);
console.log(email);
console.log(contact);

//Array
//ES5
const arr =["A","B","C","D","E"]
// var v1 =arr[0];
// console.log(v1);

//ES6
let {v1,v2,v3,v4,v5}=arr;
console.log(v1);
console.log(v2);
console.log(v3);





