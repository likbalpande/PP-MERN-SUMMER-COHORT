import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/pages/homepage.js";

const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

// // React Element
// const AboutMe = (
//     <div>
//         <h1> I am About page</h1>
//     </div>
// );

// React Component
// const HomePage = () => {
//     return (
//         <div>
//             <h1>I am homepage</h1>
//         </div>
//     );
// };

const categoriesList = [
    "Fresh",
    "Amazon Mini TV",
    "Sell",
    "Best Sellers",
    "Today's Deals",
    "Mobiles",
    "Prime",
    "Customer Services",
    "Electronics",
    "Fashion",
];

const App = () => {
    return <HomePage categoriesList={categoriesList} />;
    // return HomePage({
    //     categoriesList: categoriesList,
    // });
};

root.render(<App />);
