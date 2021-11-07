import React from "react";
import ReactDOM from "react-dom";
import {useSelector, useDispatch} from "react-redux";
import {IReduxState} from "../types"
import {hideShowInfoModal} from '../actions'

const ViewMovieInfo = () => {
    const dispatch = useDispatch();
    const infoMovie = useSelector((store: IReduxState) => store.infoMovie);
    const portalDiv = document.querySelector('main')!;
    const closeModal = () => {
        dispatch(hideShowInfoModal());
    };

    return ReactDOM.createPortal(
        <>
            <div className="modal_box">
                <div className="modal_wrap">
                    <div className="close" onClick={closeModal}>x</div>
                    <div className="modal_info">
                        <div className="img">
                            <img src={infoMovie.posterUrl} alt={infoMovie.nameRu}/>
                        </div>
                        <div className="info">
                            <div className="title">{infoMovie.nameRu}</div>
                            <div className="item date">Год производства: {infoMovie.year}</div>
                            <div
                                className="item countries">Страна: {infoMovie.countries.map((el) => el.country).join(', ')}</div>
                            <div
                                className="item genres">Жанр: {infoMovie.genres.map((el) => el.genre).join(', ')}</div>
                            <div className="item slogan">Слоган: {infoMovie.slogan}</div>
                            <div className="item time">Время: {infoMovie.filmLength} мин.</div>
                        </div>
                    </div>
                    <div className="desc">
                        <div className="title">Описание</div>
                        {infoMovie.description}
                    </div>
                </div>
            </div>
            <div className="modal_bg" onClick={closeModal}></div>
        </>,
        portalDiv
    )
};

export default ViewMovieInfo
