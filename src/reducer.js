const initialState = {
    listMovie: [],
    titleList: "Топ 20 лучших фильмов",
    typesList: "films",
    typeUrl: 2,
    requestUrl: "top?type=TOP_250_BEST_FILMS",
    infoMovie: [],
    showInfoModal: false,
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
                typeUrl: action.typeUrl,
            };
        case 'SET_INFO_MOVIE':
            return {
                ...state,
                infoMovie: action.infoMovie,
                showInfoModal: true,
            };
        case 'SET_INFO_MOVIE':
            return {
                ...state,
                infoMovie: action.infoMovie,
                showInfoModal: true,
            };
        case 'HIDE_SHOW_MODAL':
            return {
                ...state,
                showInfoModal: false,
            };
        default:
            return state;
    }
}
