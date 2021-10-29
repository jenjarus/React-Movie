export function setListMovie(data) {
    return {
        type: 'SET_LIST_MOVIE',
        listMovie: data,
    }
}
export function setRequestUrl(types, data, title, typeUrl) {
    return {
        type: 'SET_REQUEST_URL',
        types: types,
        requestUrl: data,
        titleList : title,
        typeUrl: typeUrl,
    }
}
export function seInfoMovie(data) {
    return {
        type: 'SET_INFO_MOVIE',
        infoMovie: data,
    }
}
export function hideShowInfoModal() {
    return {
        type: 'HIDE_SHOW_MODAL',
    }
}
