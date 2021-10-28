const initialState = {
    listMovie: {},
    titleList: "Топ 20 лучших фильмов",
    typesList: "films",
    requestUrl: "top?type=TOP_250_BEST_FILMS",
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_LIST_MOVIE':
            return {
                ...state,
                listMovie: action.listMovie,
            };
        case 'SET_REQUEST_URL':
            return {
                ...state,
                typesList: action.types,
                requestUrl: action.requestUrl,
                titleList: action.titleList,
            };
        default:
            return state;
    }
}
