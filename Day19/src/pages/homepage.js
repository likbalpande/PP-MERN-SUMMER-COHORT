import "./homepage.css";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import AdCards from "../components/adCards";

const HomePage = (props) => {
    return (
        <div className="homepage-main-container">
            <Navbar searchText={props.searchText} setSearchText={props.setSearchText} />
            <CategoryBar categoriesList={props.categoriesList} />
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/vernac-t/header/D153209428_Hero-With-Tag--RTB-PC_3000x1200._CB566787409_.jpg"
                style={{
                    width: "100vw",
                }}
            />
            <AdCards />
        </div>
    );
};

export default HomePage;
