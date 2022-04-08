import { combineReducers } from "redux";
import cardsRedicer from "./cardsReducer";

const rootReducer = combineReducers({
    cards: cardsRedicer,
});

export default rootReducer;