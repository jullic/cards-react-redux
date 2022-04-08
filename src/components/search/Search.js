import { useDispatch, useSelector } from "react-redux";
import { changeFilterType, changeSearchInput } from "../../redux/actions/actions";


const Search = () => {
    const {searchInput, filterType} = useSelector(state => state.cards);
    const dispatch = useDispatch();

    const onChangeSearchInput = (e) => {
        dispatch(changeSearchInput(e.target.value));
    }

    const onChangeFilterType = (filterType) => {
        dispatch(changeFilterType(filterType));
    }
    return (
        <div className="cards__search">
            <div className="cards__search-title">Поиск</div>
            <input onChange={onChangeSearchInput} type="text" className="cards__search-input" value={searchInput}/>
            <div className="cards__search-btns">
                <button onClick={() => onChangeFilterType('all')} className={`btn cards__search-btn ${filterType === 'all' ? 'active' : ''}`}>Все</button>
                <button onClick={() => onChangeFilterType('important')} className={`btn cards__search-btn ${filterType === 'important' ? 'active' : ''}`}>Важное</button>
                <button onClick={() => onChangeFilterType('unimportant')} className={`btn cards__search-btn ${filterType === 'unimportant' ? 'active' : ''}`}>Неважное</button>
            </div>
        </div>
    )
};

export default Search;