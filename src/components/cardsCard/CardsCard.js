import { Link } from "react-router-dom";

const CardsCard = (props) => {

    return (
        <Link onClick={props.onOpenCard} to={`/card/${props.card.id}`} className="cards__card">
            <button onClick={(e) => {
                e.preventDefault();
                props.onDeleteCard();
            }} className="cards__card-btn">×</button>
            <h2 className="cards__card-title">{props.card.name}</h2>
            <div className="cards__card-tags">{props.card.tags.join('')}</div>
            <div className="cards__card-importance">{props.card.type === 'important' ? 'Важное' : 'Неважное'}</div>
            <div className="cards__card-descr">{props.card.descr.length >= 80 ? props.card.descr.slice(0, 80).trim() + '...' : props.card.descr}</div>
        </Link>
    );
};

export default CardsCard;