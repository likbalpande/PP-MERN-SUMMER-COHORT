import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import SearchResultCard from "../components/searchResultCard";

const SearchPage = ({ categoriesList = [] }) => {
    return (
        <div>
            <Navbar />
            <CategoryBar categoriesList={categoriesList} />
            <div style={{ display: "grid", gridTemplateColumns: "2fr 8fr" }}>
                <div className="search-filters-container"></div>
                <div className="search-results-container">
                    <h4>Results</h4>
                    <p>Check each product page for other buying options.</p>
                    <SearchResultCard />
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
