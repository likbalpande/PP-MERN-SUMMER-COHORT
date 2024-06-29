// const person = {
//     // abc
//     name: "John", // efg
//     city: "Delhi", // xgh
//     hobbies: ["playing", "painting"], // yzs
// };

// person = { // bcd
//     name: "John", //
//     city: "Delhi", //
//     hobbies: ["playing", "painting"], //
// };

// console.log(person);

// person.name = "Smith"; // shj

// console.log(person);

// -----------------------------------------------------

// primitive --> immutable
// immutable --> cannot be modified

// let str = "Delhi";
// console.log(str);
// let str2 = "Delhi-";
// console.log(str);

// if (str == str2) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// let str = "Delhi"; // xe12
// let str2 = "Delhi"; // av23

// if (str == str2) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// -----------------------------------------------------

// loose equality
// when you are comparing between primitives
// --> value (type coercion is considered)
// --> "10" is same as 10 with == comparison

// strict equality
// when you are comparing between primitives
// --> value (without coercion is considered), types should also be same
// --> "10" is NOT same as 10 with === comparison

// -----------------------------------------------------

// loose equality
// when you are comparing between NON-primitives
// --> it will check for the reference equality

// strict equality
// when you are comparing between NON-primitives
// --> it will also check for the reference equality

// const p1 = {
//     // abc
//     name: "Aman",
// };

// const p2 = {
//     // abw
//     name: "Aman",
// };

// if (p1 == p2) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// const p1 = {
//     // xe1
//     name: "Aman",
//     city: "Dehradun",
//     age: "30",
//     state: "UK",
//     hobbies: ["playing", "painting"],
// };

// // const p2 = p1; // xe1 // shallow copy

// // SPREAD operator --> unpacking --> taking the properties out of the container
// const p2 = { ...p1 }; //yz2 // NOT a shallow copy

// p2.name = "Mohit";
// p2.state = "Mohit";
// p2.hobbies[0] = "Chess";

// console.log(p1);
// console.log(p2);

// -----------------DOM : intro and getElementById --------------------------

// const cp = document.getElementById("i1"); --> returns an element
// console.dir(cp);

// // hello world --> text
// // hello-world --> kebab case or dash case
// // helloWorld --> camel case

// cp.style.backgroundColor = "lime";
// cp.style.padding = "8px";

// // cp.innerHTML = "<ul><li>Restricted access to the course</li><li>Copyright @ Programming Pathshala</li></ul>";
// cp.innerText = "<ul><li>Restricted access to the course</li><li>Copyright @ Programming Pathshala</li></ul>";

// ----------------- DOM: getElementById (element not present) --------------------------

// const cp = document.getElementById("i2");
// console.dir(cp);

// cp.style.backgroundColor = "lime";
// cp.style.padding = "8px";

// // cp.innerHTML = "<ul><li>Restricted access to the course</li><li>Copyright @ Programming Pathshala</li></ul>";
// cp.innerText = "<ul><li>Restricted access to the course</li><li>Copyright @ Programming Pathshala</li></ul>";

// // ----------------- DOM: getElementsByClassName --------------------------

// const cp = document.getElementsByClassName("card"); // --> returns an HTMLCollection of elements (Array like)
// console.dir(cp);

// cp[0].style.border = "2px dashed lime";

// cp[1].innerHTML = "<p>hello</p>";

// ----------------- DOM: getElementsTagName  --------------------------
// ----------------- DOM: getElementsName  --------------------------

// ----------------- DOM: querySelector : returns you the first element that match --------------------------
// const p = document.querySelector("p");
// console.log(p);

// const card = document.querySelector(".card:last-child");
// console.log(card);

// const cp = document.querySelector("#i1");
// console.log(cp);

// ----------------- DOM: querySelectorAll  : returns you the collection of all elements that match  --------------------------

const card = document.querySelector(".card");

const newHeading = document.createElement("h5");
newHeading.innerText = "Please comment";
card.appendChild(newHeading);
// card.appendChild(newHeading); // appending twice won't work
