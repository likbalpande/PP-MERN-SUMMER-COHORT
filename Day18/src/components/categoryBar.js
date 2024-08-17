import "./categoryBar.css";

const CategoryBar = (props) => {
    console.log(props);
    // return <div className="category-bar">{props.categoriesList}</div>;
    return (
        <div className="category-bar">
            {/* 
                <p>{props.categoriesList[0]}</p>
                <p>{props.categoriesList[1]}</p>
            */}
            {props.categoriesList.map((elem) => {
                return <p>{elem}</p>;
            })}
        </div>
    );
};

export default CategoryBar;
