//settimeout
setTimeout(() =>{
   console.log('welcome to javascript class') 
},2000)

//setinterval
setInterval(() => {
    console.log("hello world")
}, 1000);

//asynchronous
console.log('match start');
setTimeout(()=>{
   console.log('break for players')
},2000)
console.log('resume match after break');

//synchronous
function greet(){
    console.log('hello')
}
console.log('world');
console.log('javascript');
greet();