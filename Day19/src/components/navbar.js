// import { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
    // let [searchText, setSearchText] = useState("Laptop");
    // let searchText = "Laptop";
    console.log("Function is rendered!");
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate("/search");
    };

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleTextChange = (e) => {
        // console.log("-> ", searchText);
        // searchText = e.target.value;
        // console.log("--> ", searchText);
        setSearchText(e.target.value);
    };

    console.log("SearchText =", searchText);

    return (
        <div className="navbar">
            <div style={{ display: "flex" }} onClick={handleHomeClick}>
                <div id="amazon-logo" />
                .in
            </div>
            <input value={searchText} placeholder="Search products" onChange={handleTextChange} />
            <button id="search" onClick={handleSearchClick}>
                Search
            </button>
            {/* 
            Never use anchor tags in React because they send a request to server for new page, 
            which is not required in react
            <a href="/">Home</a>
            <a href="/search">SearchPage</a> */}
            <Link to="/">Home</Link>
            <Link to="/search">SearchPage</Link>
            <p>{searchText}</p>
        </div>
    );
};

export default Navbar;
