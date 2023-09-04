//spread //use to splitup array or object properties
// const oldArray =[1,2,3,4,5];
// const newArray =[...oldArray,6,7,8,9];
// console.log(newArray);

// //rest //list  of function arguments converted into array
// const sum = (...numbers)=>{
//     let total=0;
//     numbers.forEach((n)=>{
//         total+= n;
//     });
//     console.log(total);
// };
// sum(1,2,3,4,5,7,8,9);

//REST OPERATOR
/*function addNumber(a,b,c,...other)
{
  console.log(a+b+c);
}
const res=addNumber(2,5,6,7,8,9,1,2,3);
console.log(res);*/

//spread operator
/*var names=["ajay","anuj","suresh"]
 function getNames(name1,name2,name3){
     console.log(name1,name2,name3)
 }
 getNames(...names);//spread 
 getNames(names[0],names[1],names[2]);*/



//object ke sath- rest
var students = {
    name: "sajid",
    age: "28",
    hobbies: ["cricket", "singing"]
}
const{age,...rest}=students;//destructing Array
console.log(rest);
console.log(age);

//spread
var newStudent={
    ...students,
    age:29
}
console.log(newStudent);