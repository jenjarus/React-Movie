import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {setListMovie} from './actions'
import './styles/reset.css'
import './styles/base.scss'
import ListMovie from "./Components/ListMovie";
import ListTops from "./Components/ListTops";
import SearchMovie from "./Components/SearchMovie";

const App = ({setListMovie, typesList, listMovie, typeUrl, requestUrl}) => {
    const api = async (reques, typeArr, typeUrl) => {
      let baseUrl;
      const apiHeadersKey = {'X-API-KEY': '943156f1-51e2-4bba-9657-e25705632abd'};

      switch (typeUrl) {
        case 1:
          baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/';
          break;
        case 2:
          baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
          break;
        default:
          baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/';
          console.log('Упс...');
          break;
      }
        const api_url = await fetch(baseUrl + reques, {headers: apiHeadersKey});
        const data = await api_url.json();
        setListMovie(data[typeArr]);
    };

    const loadingApp = (data) => {
        if (Object.keys(data).length) {
            return <ListMovie/>
        } else {
            return <div>Не найдено</div>
        }
    };

    useEffect(() => {
        api(requestUrl, typesList, typeUrl);
    }, [requestUrl]);

    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="title">Поиск<span className="red">кино</span></div>
                    </div>
                </div>
            </header>
            <main>
                <article className="container">
                    <SearchMovie/>
                    <ListTops/>
                    {loadingApp(listMovie)}
                </article>
            </main>
            <footer>
                <div className="container">
                    <div className="footer">
                        <div className="copy">©Jenjarus <span className="year">2077</span></div>
                    </div>
                </div>
            </footer>
        </>
    );
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
    setListMovie,
};

export default connect(mapStateToProps, mapDipatchToProps)(App)

