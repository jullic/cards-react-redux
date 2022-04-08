import CardForm from "../cardForm/CardForm"
import Cards from "../cards/Cards";
import Search from "../search/Search"

const MainPage = () => {

    return (
        <div className="cards">
            <div className="container">
                <div className="cards__wrapper">
                    <div className="cards__section">
                        <Search/>
                        <Cards/>
                    </div>
                    <div className="cards__section">
                        <CardForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage