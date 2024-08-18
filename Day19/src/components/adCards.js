import AdCard from "./adCard";
import "./adCards.css";

const data = [
    {
        title: "Revamp your home in style",
        cards: [
            {
                heading: "Cushion Covers",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
            },
            {
                heading: "Figurines, Vases & more",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg",
            },
            {
                heading: "Home storage",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg",
            },
            {
                heading: "Lighting Solutions",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
            },
        ],
    },
    {
        title: "Starting ₹149 | Headphones",
        cards: [
            {
                heading: "Cushion Covers",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
            },
            {
                heading: "Figurines, Vases & more",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg",
            },
            {
                heading: "Home storage",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg",
            },
            {
                heading: "Lighting Solutions",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
            },
        ],
    },
    {
        title: "Appliances for your home",
        cards: [
            {
                heading: "Cushion Covers",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
            },
            {
                heading: "Figurines, Vases & more",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg",
            },
            {
                heading: "Home storage",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg",
            },
            {
                heading: "Lighting Solutions",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
            },
        ],
    },
    {
        title: "Amazon Pay | Travel",
        cards: [
            {
                heading: "Cushion Covers",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
            },
            {
                heading: "Figurines, Vases & more",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg",
            },
            {
                heading: "Home storage",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg",
            },
            {
                heading: "Lighting Solutions",
                imgUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
            },
        ],
    },
];

const AdCards = function () {
    return (
        <div className="ad-cards-container">
            {data.map((elem) => {
                return <AdCard adCard={elem} key={elem.title} />;
            })}
        </div>
    );
};

export default AdCards;
