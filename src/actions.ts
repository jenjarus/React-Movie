export function setListMovie(data: object[]) {
    return {
        type: 'SET_LIST_MOVIE',
        listMovie: data,
    }
}
export function setRequestUrl(types: string, data: string, title: string, typeUrl: number) {
    return {
        type: 'SET_REQUEST_URL',
        types: types,
        requestUrl: data,
        titleList : title,
        typeUrl: typeUrl,
    }
}
export function seInfoMovie(data: object[]) {
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
