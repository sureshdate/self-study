"use strict";
exports.__esModule = true;
var message = "welcome back";
console.log(message);
var x = 10;
var y = 20;
//let x=30; we cannot  initialize same variable
var sum; //we can give the let variable withought initializing
//const title// with const we have to initialize any value other wise it gives error
var title = "codeevolution";
//Variable type: boolean,any,number,string,unknown
var isbeginner = true;
var total = 0;
var name = "vishwas";
var sentence = "My name is ".concat(name, "\nI am a begineer in typescript ");
console.log(sentence);
//null
var n = null;
var u = undefined;
var isNew = null; //we can assign null,undefined to any data type
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var Person = ["chris", 22];
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
var c = color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'vishwas';
var a;
a = 10;
a = true;
var b = 20;
var multitype;
multitype = 20;
multitype = true;
var anytype;
anytype: true;
anytype: 20;
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'suresh',
    lastName: 'Date'
};
fullName(p);
