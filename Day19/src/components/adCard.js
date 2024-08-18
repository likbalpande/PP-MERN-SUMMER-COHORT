const AdCard = (props) => {
    return (
        <div className="ad-card">
            <h4>{props.adCard.title}</h4>
            <div className="ad-card-grid">
                {props.adCard.cards.map((item) => {
                    return (
                        <div className="ad-card-item" key={item.heading}>
                            <img src={item.imgUrl} />
                            <h6>{item.heading}</h6>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AdCard;
