import React from "react";

const ListMovieItem = ({data}) => {
    const ratingHide = !data.rating ? ' hide': '';

    return (
        <div className="item">
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

export default ListMovieItem
