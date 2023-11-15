//A promice is an object  There are 3 states of the promice project
// 1)pending:initial State,before the Promices succeeds or fails
// 2)resolved:completed promice
// 3)Rejected:failed Promice

//callback
/*const datas=[
    
        {name:"ajay",profession:"software engineer"},
        {name:"sajid",profession:"software engineer"}
    
]
function getDatas()
{
    setTimeout(()=>{
     let output="";
     datas.forEach((data,index)=>{
        output+=`<li>${data.name}</li>`
     })
     document.body.innerHTML=output;
    },1000)
}
getDatas();



//callback
function createData(newData,callback){
   setTimeout(()=>{
    datas.push(newData);
    callback();
   },2000)
}
createData({name:"suresh",profession:"software engineer"},getDatas)
*/


//promice

const datas=[
   {name:"ajay",profession:"software engineer"},
   {name:"sajid",profession:"software engineer"}
]
function getDatas(){
   setTimeout(()=>{
      let output="";
      datas.forEach((data,index)=>{
        output+= `<li>${data.name}}</li>`
      })
      document.body.innerHTML=output;
   },1000)
}

function createData(newData){
   return new Promise((resolve,rejected)=>{
      setTimeout(()=>{
       datas.push(newData);
       let error=false;
       if
       (!error){
         resolve();
       }
       else{
         rejected ("kuch sahi nahi he");
       }
      },1000)
   })
}
 async function start(){
   await createData({name:"suresh",profession:"software Engineer"})
   getDatas();
 }


start();


//when u want to get the data from apis or when we use fetch function ==promices or async used...*/