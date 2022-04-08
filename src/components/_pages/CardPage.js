import { useSelector } from "react-redux";
import Card from "../card/Card"


const CardPage = () => {
    const {card} = useSelector(state => state.cards);

    return (
        <main className="main main-card">
            <div className="container">
                <Card card={card}/>
            </div>
        </main>
    )
};

export default CardPage;