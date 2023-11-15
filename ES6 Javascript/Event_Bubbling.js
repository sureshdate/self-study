//Event bubbling(data shows console on chile to parent..) 
//stop propagation, Immediate Propogation & prevent default


//Event bubbling(data propagates console  child to parent..)
var div = document.querySelector("div");
var button = document.querySelector("button");
/*div.addEventListener("click",()=>{
    console.log("div");
})
 button.addEventListener("click",()=>{
     console.log("button");
 })*/
 
 
//Event Capturing ((data propogates parent to child..))
// div.addEventListener("click",()=>{
//     console.log("div");
// },true)
// button.addEventListener("click",()=>{
//     console.log("button");
// },true)



//stop propagation
div.addEventListener("click",()=>{
    
    console.log("div");
})
button.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("button");
}) //output is button

//immediate propagation:event.stopImmediatePropagation();
//preventDefault:prevent default behavior of browser
// var a =document.querySelector("a");
// a.addEventListener("click",(event)=>{
//      event.preventDefault();
//     console.log("button");
// })
















