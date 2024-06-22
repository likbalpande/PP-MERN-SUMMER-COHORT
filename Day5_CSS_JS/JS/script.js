// console.log(10 * 21);

// // var city = 'Delhi';
// console.log(city);
// var city = "Delhi";
// console.log(city);
// // re-assignment is allowed
// city = "Mumbai";
// console.log(city);
// // re-declaration is allowed
// var city = "Chennai";
// console.log(city);
// // scope is function scoped
// function abc() {
//     var state = "Delhi";
//     console.log(state);
// }
// abc();
// // console.log(state);

// ********** var : oldest variable ****************
// 1. Re-declaration is allowed
// 2. Re-assignment is allowed
// 3. If you access it before declaration --> (no error) --> it gives undefined
// 4. The scope the var variable is "Function scoped".

// // console.log(city);
// let city = "Delhi";
// console.log(city);
// city = "Mumbai";
// console.log(city);
// // let city = "Chennai";
// // console.log(city);
// {
//     let state = "Delhi";
//     console.log(state);
// }
// console.log(state);

// ********** let : new variable introduced in ES6 ****************
// 1. Re-declaration is NOT allowed
// 2. Re-assignment is allowed
// 3. If you access it before declaration --> Error
// 4. The scope the let variable is "BLOCK scoped".

// ********** const : new variable introduced in ES6 ****************
// 1. Re-declaration is NOT allowed
// 2. Re-assignment is NOT allowed
// 3. If you access it before declaration --> Error
// 4. The scope the const variable is "BLOCK scoped".
// 5. You need to initialize in during declaration

// const car = "Toyota";
// console.log(car);

// // car = "Toyota";
// // const state;
// // state = "Delhi";

// --> variables

// --> dataypes
// we have 8 data types
// Primitive:
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// Non-primitive:
// 8. Object --> object, array, date

// You don't need to specify datatype anywhere

// JS is dynamically typed and loosely typed

// let temp = "hello";
// console.log(temp);
// temp = 10;
// console.log(temp);
