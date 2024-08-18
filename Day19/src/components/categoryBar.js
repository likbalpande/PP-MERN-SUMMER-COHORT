import "./categoryBar.css";

const CategoryBar = (props) => {
    const { categoriesList = [] } = props;
    return (
        <div className="category-bar">
            {categoriesList.map((elem) => {
                return <p key={elem}>{elem}</p>;
            })}
        </div>
    );
};

// ? --> optional chaining

export default CategoryBar;
