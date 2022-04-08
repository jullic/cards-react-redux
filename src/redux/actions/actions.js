export const createNewCard = (newCard) => {
    return {
        type: 'CREATE_NEW_CARD',
        payload: newCard
    }
}

export const updateLocalStorage = () => {
    return {
        type: 'UPDATE_LOCAL_STORAGE',
    }
};

export const deleteCard = (id) => {
    return {
        type: 'DELETE_CARD',
        payload: id
    }
}

export const changeFilterType = (filterType) => {
    return {
        type: 'CHANGE_FILTER_TYPE',
        payload: filterType
    }
}

export const changeSearchInput = (value) => {
    return {
        type: 'CHANGE_SEARCH_INPUT',
        payload: value
    }
}

export const openCard = (id) => {
    return {
        type: 'OPEN_CARD',
        payload: id
    }
};

export const changeCardDescr = (value) => {
    return {
        type: 'CHANGE_CARD_DESCR',
        payload: value,
    }
}