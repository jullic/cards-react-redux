import { useDispatch, useSelector } from "react-redux";
import { deleteCard, openCard, updateLocalStorage } from "../../redux/actions/actions";
import CardsCard from "../cardsCard/CardsCard";

const Cards = () => {
    const dispatch = useDispatch();

    const filteredCards = useSelector(state => {
        if (state.cards.filterType === 'all') {
            if (state.cards.searchInput[0] === '#') {
                return state.cards.cards.filter(card => card.tags.includes(state.cards.searchInput));
            }
            if (state.cards.searchInput) {
                return state.cards.cards.filter(card => card.name.includes(state.cards.searchInput) || card.descr.includes(state.cards.searchInput));
            }
            return state.cards.cards;
        }
        else {
            return state.cards.cards.filter(card => card.type === state.cards.filterType);
        }
    });

    const onDeleteCard = (id) => {
        dispatch(deleteCard(id));
        dispatch(updateLocalStorage());
    }

    const onOpenCard = (id) => {
        dispatch(openCard(id));
        dispatch(updateLocalStorage());
    }

    return (
        <div className="cards__cards">
            {filteredCards.map(card => <CardsCard key={card.id} onOpenCard={() => onOpenCard(card.id)} onDeleteCard={() => onDeleteCard(card.id)} card={card}/>)}
        </div>
    )
};

export default Cards;