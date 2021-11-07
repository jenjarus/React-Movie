import React from "react";
import {useDispatch} from "react-redux";
import {setRequestUrl} from "../actions";

const ListTops = () => {
    const dispatch = useDispatch();
    const typeUrl = 2; //Версия API
    const REQUESTS = {
        best: {
            type: "films",
            url: "top?type=TOP_250_BEST_FILMS",
            title: "Топ-20 лучших фильмов",
        },
        popul: {
            type: "films",
            url: "top?type=TOP_100_POPULAR_FILMS",
            title: "Топ-20 популярных фильмов",
        },
        await: {
            type: "films",
            url: "top?type=TOP_AWAIT_FILMS",
            title: "Топ-20 ожидаемых фильмов",
        },
        premieres: {
            type: "items",
            url: "premieres?year=2021&month=OCTOBER",
            title: "Топ-20 кинопремьер",
        },
    };

    return (
        <div className="listTops">
            <div className="items">
                <button className="btn"
                        onClick={() => dispatch(setRequestUrl(REQUESTS.best.type, REQUESTS.best.url, REQUESTS.best.title, typeUrl))}>{REQUESTS.best.title}</button>
                <button className="btn"
                        onClick={() => dispatch(setRequestUrl(REQUESTS.popul.type, REQUESTS.popul.url, REQUESTS.popul.title, typeUrl))}>{REQUESTS.popul.title}</button>
                <button className="btn"
                        onClick={() => dispatch(setRequestUrl(REQUESTS.await.type, REQUESTS.await.url, REQUESTS.popul.title, typeUrl))}>{REQUESTS.popul.title}</button>
            </div>
        </div>
    );
};

export default ListTops
