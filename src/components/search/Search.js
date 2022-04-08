

const Search = () => {

    return (
        <div className="cards__search">
            <div className="cards__search-title">Поиск</div>
            <input type="text" className="cards__search-input" />
            <div className="cards__search-btns">
                <button className={`btn cards__search-btn`}>Все</button>
                <button className={`btn cards__search-btn`}>Важное</button>
                <button className={`btn cards__search-btn`}>Неважное</button>
            </div>
        </div>
    )
};

export default Search;