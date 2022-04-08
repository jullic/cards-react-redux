import ContentEditable from "react-contenteditable";
import { Link } from "react-router-dom";

const Card = ({card, onCloseCard}) => {

    return (
        <div className="card">
            <Link onClick={onCloseCard} to='/' className="card__exit">×</Link>
            <div className="card__name">{card.name}</div>
            <div className="card__important">{card.type === 'inportant' ? 'Важное' : 'Неважное'}</div>
            <div className="card__tags">{card.tags.join('')}</div>
            <textarea className="card__description" value={card.descr}></textarea>
        </div>
    );
};

export default Card;