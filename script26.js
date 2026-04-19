
//1 st question
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;

console.log(first);  
console.log(second); 


//2 nd question
const user = { name: 'Alice', age: 30, city: 'Paris' };
const { name, city } = user;

console.log(name); 
console.log(city); 

//3 rd question
function sum(first, ...rest) {
  console.log('First:', first);   
  console.log('Rest:', rest);     
  
  return rest.reduce((total, num) => total + num, first);
}

console.log(sum(1, 2, 3, 4, 5)); 
