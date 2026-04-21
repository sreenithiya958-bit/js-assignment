// class
class information {
    constructor(name,depart){
        this.name = name
        this.depart = depart
    }
    print(){
        console.log(`my name is ${this.name}, from ${this.depart}`)
    }

}
result = new information("nithiyasree","AI&DS")
result.print()

//arrow function
const greet = () => ("hello")
console.log(greet())

const greet = name => {
    let message = `Hello, ${name}`;
    return message;
};

console.log(greet("Nithiya"));

const square = x => x*x
console.log(square(4))