// ------------------------ CUSTOM PROMISE ------------------------

// console.log("START");

// const pr = new Promise(function promiseCallback(resolve, reject) {
//     // it did some database interaction
//     // he got the user ID and then we resolved the promise with that ID
//     console.log("PROMISE CB START");
//     setTimeout(function setTimeoutHandler() {
//         console.log("tried to resolve");
//         resolve(["ud123ab123"]);
//     }, 10000);
//     setTimeout(function setTimeoutHandler() {
//         console.log("tried to reject");
//         reject("Oops! Something went wrong...");
//     }, 4000);
//     console.log("PROMISE CB END");
// });

// console.log(pr);

// pr.then(function promiseSuccessHandler(res) {
//     console.log("success:", res);
// }).catch((err) => {
//     console.log("failed:", err);
// });

// console.log("END");

// ---------------------------------- Handle Fetch promise ---------------------

// console.log("START");

// const pr = fetch("https://api.github.com/users/likbalpande");

// console.log(pr);

// pr.then(function promiseSuccessHandler(res) {
//     console.log("success:", res);
// }).catch((err) => {
//     console.log("failed:", err);
// });

// console.log("END");

// ----------------------  BASIC: MAKE A Dynamically Rendered UI ----------------------

// const pr = fetch("https://dummyjson.com/recipes");

// pr.then((res) => {
//     const pr2 = res.json();
//     pr2.then((data) => {
//         console.log("✅", data);
//         const parent = document.getElementsByTagName("main")[0];
//         console.log(parent);
//         parent.innerText = data.recipes[0].name;
//     });
// }).catch((err) => {
//     console.log("🚨 Error: ", err);
// });

// ----------------------  Properly: MAKE A Dynamically Rendered UI ----------------------

// const pr = fetch("https://dummyjson.com/recipes");

// pr.then((res) => {
//     const pr2 = res.json();
//     pr2.then(renderUI);
// }).catch((err) => {
//     console.log("🚨 Error: ", err);
// });

// const parent = document.getElementsByTagName("main")[0];

// const renderUI = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     for (let i = 0; i < recipes.length; i++) {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h4>${recipes[i].name}</h4>
//             <img src="${recipes[i].image}">
//             <p>${recipes[i].cuisine}</p>
//         `;
//         parent.appendChild(container);
//     }
// };

// ------------------------- Make into into function and callback ------------------

// const getData = (fn) => {
//     const pr = fetch("https://dummyjson.com/recipes");
//     pr.then((res) => {
//         const pr2 = res.json();
//         pr2.then(fn);
//     }).catch((err) => {
//         console.log("🚨 Error: ", err);
//     });
// };

// const parent = document.getElementsByTagName("main")[0];

// const renderUI1 = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     for (let i = 0; i < recipes.length; i++) {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h4>${recipes[i].name}</h4>
//             <img src="${recipes[i].image}">
//             <p>${recipes[i].cuisine}</p>
//         `;
//         parent.appendChild(container);
//     }
// };

// const renderUI2 = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     for (let i = 0; i < recipes.length; i++) {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h1>${recipes[i].name}</h1>
//             <h4>${recipes[i].rating}</h4>
//         `;
//         parent.appendChild(container);
//     }
// };

// getData(renderUI1);

// ------------------------- Make into into function and promise ------------------

// const getData = () => {
//     const myPr = new Promise((resolve, reject) => {
//         const pr = fetch("https://dummyjson.com/recipes");
//         pr.then((res) => {
//             const pr2 = res.json();
//             pr2.then((data) => {
//                 resolve(data);
//             });
//         }).catch((err) => {
//             console.log("🚨 Error: ", err);
//             reject(err);
//         });
//     });
//     return myPr;
// };

// const parent = document.getElementsByTagName("main")[0];

// const renderUI1 = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     for (let i = 0; i < recipes.length; i++) {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h4>${recipes[i].name}</h4>
//             <img src="${recipes[i].image}">
//             <p>${recipes[i].cuisine}</p>
//         `;
//         parent.appendChild(container);
//     }
// };

// const renderUI2 = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     for (let i = 0; i < recipes.length; i++) {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h1>${recipes[i].name}</h1>
//             <h4>${recipes[i].rating}</h4>
//         `;
//         parent.appendChild(container);
//     }
// };

// const prData = getData();
// prData.then(renderUI1).catch((err) => {
//     console.log("-->", err);
// });

// = = = = = = = = = = = = = = = = = = = =  = = = = = = = = = = = = = = = =

// const getData = () => {
//     const myPr = new Promise((resolve, reject) => {
//         const pr = fetch("https://dummyjson.com/recipes");
//         pr.then((res) => {
//             const pr2 = res.json();
//             pr2.then((data) => {
//                 resolve(data);
//             });
//         }).catch((err) => {
//             console.log("🚨 Error: ", err);
//             reject(err);
//         });
//     });
//     return myPr;
// };

// const parent = document.getElementsByTagName("main")[0];

// const renderUI1 = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     recipes.forEach((elem) => {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h4>${elem.name}</h4>
//             <img src="${elem.image}">
//             <p>${elem.cuisine}</p>
//         `;
//         parent.appendChild(container);
//     });
// };

// const renderUI2 = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     for (let i = 0; i < recipes.length; i++) {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h1>${recipes[i].name}</h1>
//             <h4>${recipes[i].rating}</h4>
//         `;
//         parent.appendChild(container);
//     }
// };

// const prData = getData();
// prData.then(renderUI1).catch((err) => {
//     console.log("-->", err);
// });

// ------------------------------- JS PRACTICE AND MORE ----------------------------

// const arr = [
//     {
//         id: 1,
//         name: "John",
//         city: "Mumbai",
//     },
//     {
//         id: 2,
//         name: "Vivek",
//         city: "Delhi",
//     },
//     {
//         id: 3,
//         name: "Kushal",
//         city: "Chennai",
//     },
//     {
//         id: 4,
//         name: "Arun",
//         city: "Delhi",
//     },
//     {
//         id: 5,
//         name: "Smith",
//         city: "Noida",
//     },
// ];

// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].city === "Delhi") {
//         result.push(arr[i]);
//     }
// }

// console.log(result);

// -----------------------------------------

// const arr = [
//     {
//         id: 1,
//         name: "John",
//         city: "Mumbai",
//     },
//     {
//         id: 2,
//         name: "Vivek",
//         city: "Delhi",
//     },
//     {
//         id: 3,
//         name: "Kushal",
//         city: "Chennai",
//     },
//     {
//         id: 4,
//         name: "Arun",
//         city: "Delhi",
//     },
//     {
//         id: 5,
//         name: "Smith",
//         city: "Noida",
//     },
// ];

// const result = [];
// arr.forEach((elem) => {
//     if (elem.city === "Delhi") {
//         result.push(elem);
//     }
// });

// console.log("by foreach", result);

// -----------------------------------------

// const arr = [
//     {
//         id: 1,
//         name: "John",
//         city: "Mumbai",
//     },
//     {
//         id: 2,
//         name: "Vivek",
//         city: "Delhi",
//     },
//     {
//         id: 3,
//         name: "Kushal",
//         city: "Chennai",
//     },
//     {
//         id: 4,
//         name: "Arun",
//         city: "Delhi",
//     },
//     {
//         id: 5,
//         name: "Smith",
//         city: "Noida",
//     },
// ];

// const result = arr.map((elem) => {
//     if (elem.city === "Delhi") {
//         return elem;
//     }
//     return null;
// });

// console.log("by foreach", result);

// ---------------------------------

// const arr = [
//     {
//         id: 1,
//         name: "John",
//         city: "Mumbai",
//     },
//     {
//         id: 2,
//         name: "Vivek",
//         city: "Delhi",
//     },
//     {
//         id: 3,
//         name: "Kushal",
//         city: "Chennai",
//     },
//     {
//         id: 4,
//         name: "Arun",
//         city: "Delhi",
//     },
//     {
//         id: 5,
//         name: "Smith",
//         city: "Noida",
//     },
// ];

// const result = arr.filter((elem) => {
//     if (elem.city === "Delhi") {
//         return true;
//     }
//     return false;
// });

// console.log("by foreach", result);

// --------------------------------

// const arr = [
//     {
//         id: 1,
//         name: "John",
//         city: "Mumbai",
//     },
//     {
//         id: 2,
//         name: "Vivek",
//         city: "Delhi",
//     },
//     {
//         id: 3,
//         name: "Kushal",
//         city: "Chennai",
//     },
//     {
//         id: 4,
//         name: "Arun",
//         city: "Delhi",
//     },
//     {
//         id: 5,
//         name: "Smith",
//         city: "Noida",
//     },
// ];

// const result = arr.map((elem) => {
//     const str = elem.name + "-" + elem.city;
//     elem.id = elem.id + "-" + elem.city;
//     return str;
// });

// console.log("old arr", arr);
// console.log("by foreach", result);

// ---------------------- REDUCE WITH DEFAULT VALUE -----------------------------

// const arr = [
//     {
//         id: 1,
//         name: "John",
//         city: "Mumbai",
//         expense: 1000,
//     },
//     {
//         id: 2,
//         name: "Vivek",
//         city: "Delhi",
//         expense: 800,
//     },
//     {
//         id: 3,
//         name: "Kushal",
//         city: "Chennai",
//         expense: 700,
//     },
//     {
//         id: 4,
//         name: "Arun",
//         city: "Delhi",
//         expense: 800,
//     },
//     {
//         id: 5,
//         name: "Smith",
//         city: "Noida",
//         expense: 600,
//     },
// ];

// const totalExpense = arr.reduce((acc, elem, idx, wholeArr) => {
//     console.log(acc, elem);
//     const newTotal = acc + elem.expense;
//     return newTotal;
// }, 0);

// console.log("\n✅ : TotalExpense:", totalExpense);

// ---------------------- REDUCE WITHOUT DEFAULT VALUE -----------------------------

// const arr = [
//     {
//         id: 1,
//         name: "John",
//         city: "Mumbai",
//         expense: 1000,
//     },
//     {
//         id: 2,
//         name: "Vivek",
//         city: "Delhi",
//         expense: 800,
//     },
//     {
//         id: 3,
//         name: "Kushal",
//         city: "Chennai",
//         expense: 700,
//     },
//     {
//         id: 4,
//         name: "Arun",
//         city: "Delhi",
//         expense: 800,
//     },
//     {
//         id: 5,
//         name: "Smith",
//         city: "Noida",
//         expense: 600,
//     },
// ];

// const totalExpense = arr.reduce((acc, elem, idx, wholeArr) => {
//     console.log(acc, elem, idx);
//     const newTotal = acc + elem.expense;
//     return newTotal;
// });

// console.log("\n✅ : TotalExpense:", totalExpense);

// ---------------------- BASIC ARRAY: REDUCE WITHOUT DEFAULT VALUE -----------------------------

// const arr = [1000, 800, 700, 800, 600];

// const totalExpense = arr.reduce((acc, elem, idx, wholeArr) => {
//     console.log(acc, elem, idx);
//     const newTotal = acc + elem;
//     return newTotal;
// });

// console.log("\n✅ : TotalExpense:", totalExpense);
