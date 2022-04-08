const initialState = {
    cards: [],
    filterCards: [],
    filterType: 'all',
    searchInput: '',
    isOneCard: false,
    card: {},
    cardId: '',
}

const cardsRedicer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default cardsRedicer;