// update
let constant = 'nithiya';
let age = 20
age = 21
console.log(age)

//template literals
const Name = 'nithiya'
const department = 'AI&DS'
const message = `hello, i am ${Name} and i'm a ${department} student`
console.log(message)

// deafult parameter
function greet (name ="guest" ){
    console.log(`hello, ${name}`);
}
greet();
greet("sree");