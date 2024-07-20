console.log("Math module running ...");

function add10(a) {
    return a + 10;
}

function add20(a) {
    return a + 20;
}

function add3Numbers(a, b, c) {
    return a + b + c;
}

// const a = 10 + 20;
// console.log(a);

// default export --> name does not matter
// module.exports = add20;

// array export
// container --> array, object

// const arrayContainer = [add20, add3Numbers, add10];
// module.exports = arrayContainer;

// const objectContainer = {
//     "add20": add20,
//     "add3Numbers": add3Numbers,
//     "add10" : add10
// };
// module.exports = objectContainer;

// ES6 introduced new feature
// if the key and value is same, then write it only once
const objectContainer = {
    add20,
    add3Numbers,
    add10,
};
module.exports = objectContainer;
