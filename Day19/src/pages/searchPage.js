import { useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import SearchResultCard from "../components/searchResultCard";

const SearchPage = ({ categoriesList = [], searchText, setSearchText }) => {
    let [productsData, setProductsData] = useState([{ title: ".... no products ..." }]);
    const getData = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const newData = await res.json();
        setProductsData(newData.products);
    };

    // getData();

    return (
        <div>
            <Navbar searchText={searchText} setSearchText={setSearchText} />
            <CategoryBar categoriesList={categoriesList} />
            <div style={{ display: "grid", gridTemplateColumns: "2fr 8fr" }}>
                <div className="search-filters-container"></div>
                <div className="search-results-container">
                    <h4>Results</h4>
                    <p>Check each product page for other buying options.</p>
                    <SearchResultCard />
                </div>
            </div>
            {productsData.map((elem) => {
                return <p>{elem.title}</p>;
            })}
        </div>
    );
};

export default SearchPage;
