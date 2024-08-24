import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/pages/homepage.js";
import SearchPage from "./src/pages/searchPage.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

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

// SPA = Single Page Applications

const App = () => {
    let [searchText, setSearchText] = useState("Laptop");

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <HomePage categoriesList={categoriesList} searchText={searchText} setSearchText={setSearchText} />,
        },
        {
            path: "/search",
            element: (
                <SearchPage categoriesList={categoriesList} searchText={searchText} setSearchText={setSearchText} />
            ),
        },
    ]);

    return <RouterProvider router={appRouter}></RouterProvider>;
};

root.render(<App />);
