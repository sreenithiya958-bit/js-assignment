function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();

//2 nd
async function handleLocalStorage() {
  try {
    // Save value
    localStorage.setItem("name", "John");
    console.log("Saved in localStorage");

    // Remove value
    localStorage.removeItem("name");
    console.log("Removed from localStorage");
  } catch (error) {
    console.log("Error:", error);
  }
}

handleLocalStorage();

//3 rd
async function handleSessionStorage() {
  try {
    // Save value
    sessionStorage.setItem("user", "Jane");
    console.log("Saved in sessionStorage");

    // Remove value
    sessionStorage.removeItem("user");
    console.log("Removed from sessionStorage");
  } catch (error) {
    console.log("Error:", error);
  }
}

handleSessionStorage();