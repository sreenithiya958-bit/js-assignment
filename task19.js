// 1st question
function add(a,b){
    console.log(a+b);
}
add(4,5);

// 2nd question
function multiply(a,b){
    console.log(a*b);
}
multiply(10,5)

//3 question
let subract = (x,y) => (x-y);{
console.log(subract(10,5));
}

function greet (name){
    return "hello" + name;

}
console.log(greet('nithiya'));


let globalvar = "i am a robo ";
function testscope(){
    let localvar =" i am a machine";
    console.log(globalvar);
    console.log(localvar);
}
testscope();
console.log(globalvar);
