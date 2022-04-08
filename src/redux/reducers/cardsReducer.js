const initialState = localStorage.getItem('CardsAppState') ? JSON.parse(localStorage.getItem('CardsAppState')) : {
    cards: [],
    filterCards: [],
    filterType: 'all',
    searchInput: '',
    isOneCard: false,
    card: {},
    cardId: '',
};

const updateLocalStorage = (state) => {
    localStorage.setItem('CardsAppState', JSON.stringify(state));
};

const cardsRedicer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_LOCAL_STORAGE':
            updateLocalStorage(state);
            return state;
        case 'CREATE_NEW_CARD':
            return {
                ...state,
                cards: [action.payload, ...state.cards],
            }
        case 'DELETE_CARD': 
            return {    
                ...state,
                cards: state.cards.filter(card => card.id !== action.payload),
            }
        case 'CHANGE_FILTER_TYPE': 
            return {
                ...state,
                filterType: action.payload,
            }
        case 'CHANGE_SEARCH_INPUT':
            return {
                ...state,
                searchInput: action.payload
            }
        case 'OPEN_CARD':
            return {
                ...state,
                cardId: action.payload,
                card: state.cards.find((card) => card.id === action.payload)
            }
        case 'CHANGE_CARD_DESCR':
            return {
                ...state,
                cards: state.cards.map(card => {
                    if (card.id === state.cardId) {
                        return {
                            ...card,
                            descr: action.payload,
                        }
                    }
                    return card;
                })
            }
        default: 
            return state;
    }
};

export default cardsRedicer;