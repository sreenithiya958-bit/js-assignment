// Create a promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // change to false to test rejection

  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

// Handle the promise using then and catch
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// callback
function calculate(a, b, callback) {
    let result = callback(a, b);
    console.log("Result:", result);
}

function add(x, y) {
    return x + y;
}

calculate(2, 3, add);