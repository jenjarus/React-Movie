export function setListMovie(data) {
    return {
        type: 'SET_LIST_MOVIE',
        listMovie: data,
    }
}
export function setRequestUrl(types, data, title) {
    return {
        type: 'SET_REQUEST_URL',
        types: types,
        requestUrl: data,
        titleList : title
    }
}
