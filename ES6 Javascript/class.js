class Person
{
    constructor(uname,uage) {
        this.name=uname;
        this.age=uage;
    }
    details(){
        console.log(`the age of ${this.name} is ${this.age}` );
    }

}
const p=new Person("WS CUBE TECH",10);
p.details();


