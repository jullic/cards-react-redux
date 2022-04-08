import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneCard, closeOneCard, updateLocalStorage } from "../../redux/actions/actions";
import Card from "../card/Card";

const CardPage = () => {
    const {isOneCard, card} = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const {cardId} = useParams();
    console.log(isOneCard);
    
    
    useEffect(() => {
        dispatch(getOneCard(cardId));
        dispatch(updateLocalStorage());
    }, []);

    const onCloseCard = () => {
        dispatch(closeOneCard());
        dispatch(updateLocalStorage());
    };

    return (
        <main className="main">
            <div className="container">
                {isOneCard ? <Card onCloseCard={onCloseCard} card={card}/> : <></>}
            </div>
        </main>
    )
};

export default CardPage;