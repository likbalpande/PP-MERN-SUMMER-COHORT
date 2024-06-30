// const sum = (a, b, show) => {
//     const res = a + b;
//     show(res);
// };

// const showResult = (txt) => {
//     console.log(`********** ${txt} **********`);
// };
// const fir = 10;
// const sec = 20;

// sum(fir, sec, showResult);

// --------------------------------------------------

// functions are the heart of JS
// javascript treats functions as first class citizens

// showResult --> callback function
// what is callback
// --> when you pass a function as a argument to another function
// --> the passed function is said to be a callback function

// sum --> higher order function (H.O.D)
// what are higher order functions?
// A function that takes another function as an argument
// OR returns a function is H.O.D.

// --------------------------------------------------

// iteration methods
// --> foreach, map, filter, find, findIndex

// const arr = ["a", "b", "c", "d", "e"];

// function printData4(fir, sec, th, fr) {
//     console.log(fir, sec, th, fr);
// }

// function printData3(fir, sec, th) {
//     console.log(fir, sec, th);
// }

// function printData2(fir, sec) {
//     console.log(fir, sec);
// }

// for (let i = 0; i < arr.length; i++) {
//     printData3(arr[i], i, arr);
// }
// console.log("------------------");
// arr.forEach(printData2);
// console.log("------------------");
// arr.forEach(printData3);
// console.log("------------------");
// arr.forEach(printData4);
// console.log("------------------");

// // --------------------------------------------------

// const arr = ["a", "b", "c", "d"];

// function printData(fir, sec, th) {
//     console.log(fir, sec, th);
// }
// console.log("---------FOR EACH---------");
// arr.forEach(printData);
// console.log("--------------------------");

// --------------------------------------------------

// const arr = ["a", "b", "c", "d"];

// console.log(`---------FOR EACH with a direct callback
// is with a function keyword and name of function---------`);

// arr.forEach(function printData(fir, sec, th) {
//     console.log(fir, sec, th);
// });

// console.log(`---------FOR EACH with a direct callback
// is with a function keyword and without name (anonymous)---------`);

// arr.forEach(function (fir, sec, th) {
//     console.log(fir, sec, th);
// });

// console.log(`---------FOR EACH with a direct callback
// is with a arrow function---------
// ********* MOST USED WAY *******
// `);

// arr.forEach((fir, sec, th) => {
//     console.log(fir, sec, th);
// });

// console.log("------------------------------");

// ------------------------SOME SIMILAR METHODS-----------------------------

// const arr = ["a", "b", "c", "d"];

// console.log("-------- forEach ---------");
// arr.forEach((fir, sec, th) => {
//     console.log(fir, sec, th);
// });

// console.log("-------- map ---------");
// arr.map((fir, sec, th) => {
//     console.log(fir, sec, th);
// });

// console.log("-------- find ---------");
// arr.find((fir, sec, th) => {
//     console.log(fir, sec, th);
// });

// console.log("-------- findIndex ---------");
// arr.findIndex((fir, sec, th) => {
//     console.log(fir, sec, th);
// });

// console.log("-------- some ---------");
// arr.some((fir, sec, th) => {
//     console.log(fir, sec, th);
// });

// ------------------------FOREACH VS MAP-----------------------------

const arr = ["a", "b", "c", "d"];

const forEachRes = arr.forEach((fir) => {
    return "hello";
});

const mapRes = arr.map((fir, idx) => {
    if (fir == "a") {
        // arr[idx] = "A was found";
        return "Yes";
    } else {
        // arr[idx] = "A was NOT found";
        return "No";
    }
});

console.log(arr);
console.log("-------- forEach ---------");
console.log(forEachRes);
console.log("-------- map ---------");
console.log(mapRes);
