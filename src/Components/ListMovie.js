import React from "react";
import ListMovieItem from "./ListMovieItem";
import ViewMovieInfo from "./ViewMovieInfo"
import {connect} from "react-redux";

const ListMovie = ({titleList, listMovie, showInfoModal}) => {
    const loadingModal = (data) => {
        if (data) {
            return <ViewMovieInfo />
        }
    };

    return (
        <>
            <div className="listMovie">
                <div className="title">{titleList}</div>
                <div className="items">
                    {listMovie.slice(0, 20).map((el, i) => <ListMovieItem key={i} data={el} />)}
                </div>
            </div>
            {loadingModal(showInfoModal)}
        </>
    );
};

function mapStateToProps(state) {
    return {
        titleList: state.titleList,
        listMovie: state.listMovie,
        showInfoModal: state.showInfoModal,
    }
}

export default connect(mapStateToProps)(ListMovie)
