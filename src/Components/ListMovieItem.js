import React from "react";
import {connect} from "react-redux";
import {seInfoMovie} from '../actions'

const ListMovieItem = ({data, seInfoMovie}) => {
    const ratingHide = !data.rating ? ' hide': '';

    const apiMovie = async (reques) => {
        const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
        const apiHeadersKey = {'X-API-KEY': '943156f1-51e2-4bba-9657-e25705632abd'};

        const api_url = await fetch(baseUrl + reques, {headers: apiHeadersKey});
        const data = await api_url.json();
        seInfoMovie(data);
    };

    return (
        <div className="item" onClick={() => apiMovie(data.filmId)}>
            <div className="item_wrap">
                <div className="img">
                    <span className={'rating' + ratingHide}>{data.rating}</span>
                    <img src={data.posterUrlPreview} alt=""/>
                </div>
                <div className="title">{data.nameRu}</div>
                <div className="info">
                    <span className="year">{data.year}</span>
                    <span className="genres">{data.genres[0] ? data.genres[0].genre : ''}</span>
                </div>
            </div>
        </div>)
};

function mapStateToProps(state) {
    return {
        typesList: state.typesList,
        typeUrl: state.typeUrl,
        listMovie: state.listMovie,
        requestUrl: state.requestUrl,
    }
}

const mapDipatchToProps = {
    seInfoMovie,
};

export default connect(mapStateToProps, mapDipatchToProps)(ListMovieItem)
