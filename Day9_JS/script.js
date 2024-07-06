// 1. Memory allocation phase
// 2. Execution phase

// console.log("Start");

// const greet = () => {
//     console.log("Greetings!");
// };

// function temp() {
//     greet();
//     console.log("Mid");
// }

// temp();

// console.log("End");

// ------------------------ SET TIMEOUT  & Stack & Callback Queue-----------------------------

// const cb = () => {
//     console.log("Times up!");
// };
// const time = 4000; // milliseconds

// setTimeout(cb, time);

// console.log("End");

// ----------------------------------------  Practice  ---------------------------------------

// console.log("Start");

// const greet = () => {
//     console.log("Greetings!");
// };

// const temp = () => {
//     setTimeout(greet, 5000);
//     setTimeout(greet, 0);
//     console.log("Mid");
// };

// temp();

// console.log("End");

// -------------------------------------- What is the issue with callback ? -------------------------

// ABC --> T1: Hyderabad, T2: Delhi

// T1: Is to make a page to get the details from user (UPI ID / Credit Card / Payment Info)
// T2: Is to call the payment interface and make the payment (Payment Status / OTP Page /  ... )

// team1.js
// T1: getPaymentDetails(...);

// team2.js
// T2: proceedToPayment(...);

// Manager
// How will the manager first do T1 and then do T2 ??

// getPaymentDetails(...) // it will take some time (that time is not guaranteed at beginning)
// proceedToPayment(...)

// * --> No setTimeout because the time is not defined
// ** --> Have a callback
// ** --> getPaymentDetails(..., proceedToPayment);
// (..., fn) => {
//     ...
//     ...
//     ...
//     fn();
// }
// ** -> The bad thing is : Inversion of Control

// Your mom told you to take the milk from milkman and give it to neighbor
// But you said to milkman that you give the milk to neighbor
// What is milkman forgets to deliver milk to neighbor
// --> how will you track that task is done or not?
// --> Who will be blamed for the responsibility?
// --> This is inversion of control , i.e., control is no more in your hand

// --------------------------------- Promise ---------------------------------

// This promise says that whenever I am done I will tell you.
// I may be successful or may fail.
// But I will tell you.

// const pr = getPaymentDetails(...); // getPaymentDetails will return a promise
// after that promise if successful (fulfilled) --> manager will call proceedToPayment(...)
// if that promise if fails (rejected) --> manager will handle it in his own way

// const cbSuccess =

const cbError = (val) => {
    console.log("fail:", val);
};

const pr = fetch("https://dummyyyyyyjson.com/products");

pr.then((val) => {
    console.log("success:", val);
    const pr2 = val.json();
    pr2.then((data) => {
        console.log(data);
    });
}).catch(cbError);

// try, catch, async, await
