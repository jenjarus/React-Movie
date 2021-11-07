import React from "react";
import ListMovieItem from "./ListMovieItem";
import ViewMovieInfo from "./ViewMovieInfo"
import {useSelector} from "react-redux";
import {IReduxState} from "../types"

const ListMovie = () => {
    const titleList = useSelector((store: IReduxState) => store.titleList);
    const listMovie = useSelector((store: IReduxState) => store.listMovie);
    const showInfoModal = useSelector((store: IReduxState) => store.showInfoModal);

    const loadingModal = (data: boolean) => {
        if (data) {
            return <ViewMovieInfo/>
        }
    };

    return (
        <>
            <div className="listMovie">
                <div className="title">{titleList}</div>
                <div className="items">
                    {listMovie.slice(0, 20).map((el, i) => <ListMovieItem key={i} data={el}/>)}
                </div>
            </div>
            {loadingModal(showInfoModal)}
        </>
    );
};

export default ListMovie
