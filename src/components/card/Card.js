import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeCardDescr, updateLocalStorage } from "../../redux/actions/actions";

const Card = (props) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(props.card.descr);

    const onExitCard = () => {
        dispatch(changeCardDescr(value));
        dispatch(updateLocalStorage());
    }
    const onSetValue = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="card">
            <Link onClick={onExitCard} to='/' className="card__exit">×</Link>
            <div className="card__name">{props.card.name}</div>
            <div className="card__important">{props.card.type === 'inportant' ? 'Важное' : 'Неважное'}</div>
            <div className="card__tags">{props.card.tags.join('')}</div>
            <textarea onChange={onSetValue} className="card__description" value={value}></textarea>
        </div>
    );
};

export default Card;