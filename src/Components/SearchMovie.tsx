import React from "react";
import {useDispatch} from "react-redux";
import {setRequestUrl} from "../actions";

const SearchMovie = () => {
    const dispatch = useDispatch();
    const typeUrl = 1; //Версия API

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        dispatch(setRequestUrl("films", "search-by-keyword?keyword=" + e.target.value, "Поиск:", typeUrl));
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

export default SearchMovie
