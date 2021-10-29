import React from "react";
import {connect} from "react-redux";
import {setRequestUrl} from "../actions";

const SearchMovie = ({setRequestUrl}) => {
    const typeUrl = 1; //Версия API

    const handleSubmit = (e) => {
        e.preventDefault();
        setRequestUrl("films", "search-by-keyword?keyword=" + e.target.value, "Поиск:", typeUrl)
    };

    return (
        <div className="form_box">
            <div className="line">
                <input
                    type="text"
                    placeholder="Введите название фильма"
                    onChange={handleSubmit}
                />
            </div>
        </div>

    );
};

function mapStateToProps(state) {
    return {
        titleList: state.titleList,
    }
}

const mapDipatchToProps = {
    setRequestUrl,
};

export default connect(mapStateToProps, mapDipatchToProps)(SearchMovie)
