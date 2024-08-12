// <ul>
//     <li class='i1'>Item 1</li>
//     <li>Item 2</li>
// </ul>

// const parent = document.getElementById("parent");

// const li1 = document.createElement("li");
// li1.innerText = "Item 1";
// li1.className = "i1";
// // li1.setAttribute("class", "i1");

// const li2 = document.createElement("li");
// li2.innerText = "Item 2";

// const ul = document.createElement("ul");
// ul.appendChild(li1);
// ul.appendChild(li2);
// parent.appendChild(ul);

// -----------------------------------------------------------------

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);
// // type, property, child -> "" / children -> []
// const li1 = React.createElement("li", { className: "i1" }, "Item 1");
// const li2 = React.createElement("li", {}, "Item 2");
// const ul = React.createElement("ul", {}, [li1, li2]);

// root.render(ul);

// -------------------------------------------------------------

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);
// // const title = React.createElement("h4", {}, "Hello from React!");
// const title = {
//     $$typeof: Symbol.for("react.element"), // security
//     type: "ul",
//     key: null,
//     ref: null,
//     props: {
//         children: [
//             {
//                 $$typeof: Symbol.for("react.element"), // security
//                 type: "li",
//                 key: null,
//                 ref: null,
//                 props: {
//                     children: "Item 1",
//                     className: "i1",
//                 },
//             },
//             {
//                 $$typeof: Symbol.for("react.element"), // security
//                 type: "li",
//                 key: null,
//                 ref: null,
//                 props: {
//                     children: "Item 2",
//                 },
//             },
//         ],
//     },
// };
// root.render(title);

// ------------------------------------------------------ jsx

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);

// // const title = React.createElement("h4", {}, "Hello from React!");
// const title = <h4 className="i1">Hello from React JSX</h4>;
// root.render(title);

// ------------------------------------------------------ jsx

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);

// const li1 = <li className="i1">Item 1</li>;
// const li2 = <li>Item 2</li>;
// const ul = (
//     <ul>
//         {li1 /* inside the curly braces you can write any js expression */}
//         {li2}
//     </ul>
// );
// root.render(ul);

// -----------------------------------------------------

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);

// // React Element
// // const ul = (
// //     <ul>
// //         <li className="i1">Item 1</li>
// //         <li>Item 2</li>
// //     </ul>
// // );

// // React Component --> naming convention is Pascal Case --> (Camel case + first letter capital)
// const Ul = () => {
//     return (
//         <ul>
//             <li className="i1">Item 1</li>
//             <li>Item 2</li>
//         </ul>
//     );
// };

// // root.render(Ul());
// root.render(<Ul />);

// ------------------------------------------------

const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

const Li1 = () => {
    // return React.createElement("li", { className: " i1" }, "Item 1");
    return <li className="i1">Item 1</li>;
};

const Li2 = () => {
    return <li>Item 2</li>;
};

const Ul = () => {
    return (
        <ul>
            <Li1 />
            <Li2></Li2>
        </ul>
    );
};

root.render(<Ul />);
