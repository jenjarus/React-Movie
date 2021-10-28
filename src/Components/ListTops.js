import React from "react";
import {connect} from "react-redux";
import {setRequestUrl} from "../actions";

const ListTops = ({setRequestUrl}) => {
    const REQUESTS = {
        best: {
            type: "films",
            url: "top?type=TOP_250_BEST_FILMS",
            title: "Топ 20 лучших фильмов",
        },
        popul: {
            type: "films",
            url: "top?type=TOP_100_POPULAR_FILMS",
            title: "Топ 20 популярных фильмов",
        },
        await: {
            type: "films",
            url: "top?type=TOP_AWAIT_FILMS",
            title: "Топ 20 ожидаемых фильмов",
        },
        premieres: {
            type: "items",
            url: "premieres?year=2021&month=OCTOBER",
            title: "Топ 20 кинопремьер",
        },
    };

    return (
        <div className="listTops">
            <div className="items">
                <button className="btn" onClick={()=>setRequestUrl(REQUESTS.best.type, REQUESTS.best.url, REQUESTS.best.title)}>Топ 20 лучших фильмов</button>
                <button className="btn" onClick={()=>setRequestUrl(REQUESTS.popul.type, REQUESTS.popul.url, REQUESTS.popul.title)}>Топ 20 популярных фильмов</button>
                <button className="btn" onClick={()=>setRequestUrl(REQUESTS.await.type, REQUESTS.await.url, REQUESTS.await.title)}>Топ 20 ожидаемых фильмов</button>
                <button className="btn" onClick={()=>setRequestUrl(REQUESTS.premieres.type, REQUESTS.premieres.url, REQUESTS.premieres.title)}>Топ 20 кинопремьер</button>
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

export default connect(mapStateToProps, mapDipatchToProps)(ListTops)
