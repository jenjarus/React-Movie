export interface IReduxState {
    listMovie: DataListInfo[],
    titleList: string,
    typesList: string,
    typeUrl: number,
    requestUrl: string,
    infoMovie: DataMovieInfo,
    showInfoModal: boolean,
}

export interface IAction {
    type: string;
    listMovie: DataListInfo[],
    titleList: string,
    types: string,
    typeUrl: number,
    requestUrl: string,
    infoMovie: DataMovieInfo,
    showInfoModal: boolean,
}

export interface DataListInfo {
    filmId: number,
    rating: string,
    posterUrlPreview: string,
    nameRu: string,
    year: string,
    genres: { genre: string }[],
}

export interface DataMovieInfo {
    filmId: number,
    rating: string,
    posterUrl: string,
    nameRu: string,
    year: string,
    slogan: string,
    filmLength: string,
    description: string,
    genres: { genre: string }[],
    countries: { country: string }[],
}
