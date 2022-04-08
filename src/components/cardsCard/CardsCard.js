import { Link } from "react-router-dom";

const CardsCard = (props) => {

    return (
        <Link to={`/card/`} className="cards__card">
            <button onClick={(e) => {
                e.preventDefault();
                props.onDelete();
            }} className="cards__card-btn">×</button>
            <h2 className="cards__card-title"></h2>
            <div className="cards__card-tags"></div>
            <div className="cards__card-importance"></div>
            <div className="cards__card-descr"></div>
        </Link>
    );
};

export default CardsCard;