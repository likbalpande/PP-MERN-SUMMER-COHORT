// function printHello() {
//     {
//         var temp = "hello var";
//         // let temp = "hello";
//     }
//     console.log(temp);
// }

// printHello();
// console.log(temp);

// ------------------------------------------------------------

// string (primitive) --> immutable
// immutable --> cannot be modified
// let userName = "Ajay"; // xe123 --> "Ajay"
// console.log(userName);

// userName = "Aman"; // yexwe --> "Aman"
// console.log(userName);

// ------------------------------------------------------------

// --> CSS Naming convention : kebab-case  / dash-case
// "container" --> "container"
// "form input" --> "form-input"

// --> JS Naming convention : camelCase
// "age" --> "age"
// "user age" --> "userAge"
// "first verification date" --> "firstVerificationDate"

// ------------------------------------------------------------
// type coercion
// + operator is used to do 1. arithmetic addition
// + operator is used to do 2. string concatenation

// let temp = 1 + 3;
// console.log(temp); // 4

// temp = 2 + "Hello";
// console.log(temp); // 2Hello

// temp = 2 + 3 + "Hello"; // 5Hello
// console.log(temp);

// temp = "Hello" + 2 + 3; // Hello23
// console.log(temp);

// temp = "1" + 20;
// console.log(temp); --> 120

// ------------------------------------------------------------

// other operators are not overloaded
// they can only perform arithmetic operations

// let temp = 3 - 1;
// console.log(temp);

// temp = 20000 - "Hello";
// console.log(temp); // NaN --> Not a Number

// temp = 2 - 30 - "Hello";
// console.log(temp); // Nan

// temp = "Hello" - 2 - 3;
// console.log(temp); // Nan

// temp = "1" - 20;
// console.log(temp); // -19

// temp = "100" - 20;
// console.log(temp); // 80

// temp = "100A" - 20;
// console.log(temp); // NaN

// temp = "100A" - "100B";
// console.log(temp); // NaN

// ---------------------------------------------

// let a = 2;
// let b = "2";

// if (a == b) {
//     // loose equality
//     console.log("1.Yes a==b");
// } else {
//     console.log("1.No a!=b");
// }

// if (a === b) {
//     // strict equality
//     console.log("2.Yes a===b");
// } else {
//     console.log("2.No a!==b");
// }

// ---------------------------------------------

// for loose equality (a==b)
// 1. if both (a,b) are primitive values
//    then check for the equality (do type conversion if required)
//    if the values come out to be same then TRUE else FALSE

// for strict equality (a===b)
// 1. if both (a,b) are primitive values
//    if the datatypes are different then FALSE
//    else check for the equality of values
//    if the values come out to be same then TRUE else FALSE

// if (1 == 2) console.log("1. Yes");
// else console.log("1. No");

// if ("1" == 2) console.log("2. Yes");
// else console.log("2. No");

// if ("10" == "10") console.log("3. Yes");
// else console.log("3. No");

// if ("10" == 10) console.log("3.1. Yes");
// else console.log("3.1. No");

// if ("10" == "11") console.log("4. Yes");
// else console.log("4. No");

// if ("abc" == "aac") console.log("5. Yes");
// else console.log("5. No");

// if (true == 1) console.log("6. Yes");
// else console.log("6. No");

// if (false == 1) console.log("7. Yes");
// else console.log("7. No");

// let a = -1; // -1, 1, 2, 3 --> true
// //             0 --> false
// if (a) console.log("8. Yes");
// else console.log("8. No");

// if (true == -1) console.log("8.1. Yes");
// // convert true into number --> true --> 1
// //              --> (1 == -1)
// else console.log("8.1. No");

// if (false == 0) console.log("9. Yes");
// else console.log("9. No");

// ---------------------------------------------

// if (1 === 2) console.log("1. Yes");
// else console.log("1. No");

// if ("1" === 2) console.log("2. Yes");
// else console.log("2. No");

// if ("10" === "10") console.log("3. Yes");
// else console.log("3. No");

// if ("10" === 10) console.log("3.1. Yes");
// else console.log("3.1. No");

// if ("10" === "11") console.log("4. Yes");
// else console.log("4. No");

// if ("abc" === "aac") console.log("5. Yes");
// else console.log("5. No");

// if (true === 1) console.log("6. Yes");
// else console.log("6. No");

// if (false === 1) console.log("7. Yes");
// else console.log("7. No");

// let a = -1; // -1, 1, 2, 3 --> true
// //             0 --> false
// if (a) console.log("8. Yes");
// else console.log("8. No");

// if (true === -1) console.log("8.1. Yes");
// // convert true into number --> true --> 1
// //              --> (1 === -1)
// else console.log("8.1. No");

// if (false === 0) console.log("9. Yes");
// else console.log("9. No");

// ---------------------------------------------
// code is executed in 2 phases
// 1. Memory allocation phase
// 2. Execution phase
// ---------------------------------------------

// // ---------------------------------------------
// // calling or invocation of function before declaration
// // it works for "function definition using function keyword"
// sum(2, 3);

// // function definition using function keyword
// function sum(a, b) {
//     console.log(a + b);
// }

// // function invocation / function call
// sum(2, 3);

// // function re-declaration is allowed
// function sum(a, b) {
//     console.log(10 + a + b);
// }
// sum(20, 30);

// ---------------------------------------------
// different ways to write a function in js

// - - - - - - - - - - - - - - - - - - - - - - - -
// 1. function declarations using function keyword
// function sum(a, b) {
//     console.log(a + b);
// }
// - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - -
// 2.function assignment (with named function)
// const add1 = function sum(a, b) {
//     console.log(a + b);
// };

// ❌ sum(10, 20);
// ✅ add1(10, 20);
// - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - -
// 3.function assignment (with anonymous function)
// const add2 = function (a, b) {
//     console.log(a + b);
// };

// ✅ add2(10, 20);
// - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - -
// 4.function assignment (with arrow function - ES6-2015)
// const add3 = (a, b) => {
//     console.log(a + b);
// };

// ✅ add3(10, 99);
// - - - - - - - - - - - - - - - - - - - - - - - -

// const userName = "Anuj";
// switch (userName) {
//     case "Aman": {
//         console.log("Hello", userName);
//         break;
//     }
//     case "Ajay": {
//         console.log("Nice to meet you", userName);
//         break;
//     }
//     case "Likhilesh": {
//         console.log("Hi ", userName);
//         break;
//     }
//     default: {
//         console.log("Who are you?");
//         break;
//     }
// }

// - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - -
// 8th datatype is Object --> object, array, date, promise, map, set

// - - - - - - - - - - - - - - - - - - - - - - - -
// const obj = new Object();
const obj = {
    userName: "John",
    age: 40,
    isVerified: true,
    2: "two",
};
console.log(obj);

// how to access the values from the object ?
// use dot operator or []
console.log(obj.userName);
console.log(obj.age);
console.log(obj.isVerified);
// ❌ console.log(obj.2);
console.log(obj[2]);

// what is that key is not present?
console.log(obj.city);
console.log(obj[3]);

// how to assign the value to a key
obj.userName = "Aman";
obj.age = "Adult";
obj[2] = "two two";
console.log(obj);

// how to assign the value to a key that is not present
// it will add this property in that object
obj.city = "Delhi";
console.log(obj);
// - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - -
// const arr = new Array();
const arr = ["apple", "orange", 33, true];
console.log(arr);

// accessing the present key from array
console.log(arr[1]);
// accessing the absent key from array
console.log(arr[10]);
// assigning the present key with new value
arr[2] = "two two";
console.log(arr);

// assigning the absent key with new value
// Never do this thing in array, it create Holes in the array
arr[10] = "ten";
console.log(arr);

// get the length of the array
console.log(arr.length);
