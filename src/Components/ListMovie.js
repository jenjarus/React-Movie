import React from "react";
import ListMovieItem from "./ListMovieItem";
import {connect} from "react-redux";

const ListMovie = ({titleList, listMovie}) => {
    return (
        <div className="listMovie">
            <div className="title">{titleList}</div>
            <div className="items">
                {listMovie.slice(0, 20).map((el, i) => <ListMovieItem key={i} data={el} />)}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        titleList: state.titleList,
        listMovie: state.listMovie,
    }
}

export default connect(mapStateToProps)(ListMovie)
