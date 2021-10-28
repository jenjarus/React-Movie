import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {setListMovie} from './actions'
import './styles/reset.css'
import './styles/base.scss'
import ListMovie from "./Components/ListMovie";
import ListTops from "./Components/ListTops";

const App = ({setListMovie, typesList, listMovie, requestUrl}) => {
  const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
  const apiHeadersKey = {'X-API-KEY': '943156f1-51e2-4bba-9657-e25705632abd'};

  const api = async (reques, type) => {
    const api_url = await fetch(baseUrl + reques, {headers: apiHeadersKey});
    const data = await api_url.json();
    console.log(data);
    setListMovie(data[type]);
  };

  const loadingApp = (data) => {
    if(Object.keys(data).length) {
      return <ListMovie />
    }
  };

  useEffect(() => {
    api(requestUrl, typesList);
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
            <ListTops />
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
    listMovie: state.listMovie,
    requestUrl: state.requestUrl,
  }
}

const mapDipatchToProps = {
  setListMovie,
};

export default connect(mapStateToProps, mapDipatchToProps)(App)

