// features/Search/rootReducer.js

const initialState = {
    guest: 1
};

const setSearch = (state = initialState, action) => {
    switch (action.type) {
        case '@search/setKeyword':
            return {
                ...state,
                keyword: action.payload
            };
        case '@search/Date':
            return {
                ...state,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate
            };
        case '@search/setGuest':
            return {
                ...state,
                guest: action.payload // 수정된 부분
            };
        default:
            return state;
    }
    return state;
};

export default setSearch;