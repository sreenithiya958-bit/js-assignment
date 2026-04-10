// object question 1
let obj = {
    name:"arun", 
    age:25, 
    sayHello : function (){
         console.log("hello!" + this.name)
    }
}

// access object
console.log(obj.name);
console.log(obj.age);

// modify object 
obj.name = "sree"
obj.age = 21
console.log(obj.name);
console.log(obj.age);

//call object
obj.sayHello();