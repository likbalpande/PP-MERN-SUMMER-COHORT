// ---- local modules (modules made by me)
// ---- default export import
// const sum = require("./myMathModule.js");
// const ans = sum(60);
// console.log(ans);

// ---- Array export import
// const arr = require("./myMathModule.js");
// const sum10 = arr[0];
// const ans1 = sum10(1010);
// console.log(ans1);
// const sum3n = arr[2];
// const ans2 = sum3n(10, 20, 40);
// console.log(ans2);

// ---- Object export import
// const obj = require("./myMathModule.js");
// // const sum20 = obj.add20;
// // const ans = sum20(100);
// // console.log(ans);
// const ans = obj.add20(200);
// console.log(ans);
// const ans2 = obj.add3Numbers(10, 20, 30);
// console.log(ans2);

// --------- external modules
// first initialize the node package --> npm init
// i want to use figlet here
// installed figlet --> npm i figlet
// --> it adds figlet to my dependencies list
// --> it stores the related files into node_modules folder
// const figlet = require("figlet");
// figlet("Likhilesh", (err, data) => {
//     if (err) {
//         console.log("Error occurred!: ", err);
//     } else {
//         console.log(data);
//     }
// });

// const oneLinerJoke = require("one-liner-joke");
// var getRandomJoke = oneLinerJoke.getRandomJoke({ exclude_tags: ["dirty", "racist", "marriage"] });
// console.log(getRandomJoke);

// ---- internal modules --> there are plenty of them
// my main emphasis will be on fs and http
// --> refer here: https://nodejs.org/docs/latest/api/fs.html

// there are three types of function in node
// --> Synchronous functions
// --> Asynchronous functions (callback, promise)
// we will start with file system module

// synchronous function to write and read file
// const fs = require("fs");
// console.log("----- Start");
// // fs.writeFileSync("my-own-file.txt", "Hello from NodeJS!");
// const data = fs.readFileSync("my-own-file.txt", { encoding: "utf8" });
// console.log(data);
// console.log("----- End");

// // Asynchronous function (callback) to write and read file
// const fs = require("fs");
// console.log("----- Start");
// fs.readFile("my-own-file.txt", { encoding: "utf8" }, (err, data) => {
//     if (err) console.log("----------------------\n", err, "\n-------------------");
//     else console.log(data);
// });
// console.log("----- End");

// // Asynchronous function (promise) to write and read file
// const fsPromises = require("fs/promises");
// console.log("----- Start");
// const pr = fsPromises.readFile("my-own-file.txt", { encoding: "utf8" });
// pr.then((data) => console.log(data)).catch((err) => console.log("--", err, "--"));
// console.log("----- End");

// // Asynchronous function (promise) to write and read file
// const fsPromises = require("fs/promises");
// console.log("----- Start");
// const pr = fsPromises.readFile("my-own-file.txt");
// pr.then((data) => {
//     console.log(data);
//     console.log(data.toString());
// }).catch((err) => console.log("--", err, "--"));
// console.log("----- End");

// Asynchronous function (promise) to write and read file
const fsPromises = require("fs/promises");
fsPromises.writeFile("other-file.js", "console.log('hello world');");
fsPromises.writeFile(
    "my-own-index.html",
    `
    <html>
        <head>
            <style>
                h1{color: red;}
            </style>
        </head>
        <body>
            <h1>Hello from NodeJS!</h1>
        </body>
    </html>
`
);
