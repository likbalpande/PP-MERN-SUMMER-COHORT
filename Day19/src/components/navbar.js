import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate(); // hook used for routing

    const handleSearchClick = () => {
        navigate("/search");
    };

    const handleHomeClick = () => {
        navigate("/");
    };

    return (
        <div className="navbar">
            <div style={{ display: "flex" }} onClick={handleHomeClick}>
                <div id="amazon-logo" />
                .in
            </div>
            <input />
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
        </div>
    );
};

export default Navbar;
