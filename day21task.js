let arr = [1,2,3,4,5,6]
let doubled = arr.map(item => item*2);
console.log(doubled)

let num = [1,2,3,4,5,6]
let evennum = num.filter(item => item %2 === 0);
console.log(evennum);

let arr3 = [5,6,7,3,9]
let sum = arr3.reduce((total,item) => total + item );
console.log(sum)

let arr1 = [3,,9,12,5,16,23]
let result = arr1.find(item => item > 10)
console.log(result);

let arr2 = [10,15,23,20,51]
let check = arr2.includes(23);
console.log(check);
