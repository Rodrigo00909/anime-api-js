import {useState, useEffect} from 'react';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';


import './App.css';

const url = 'https://api.jikan.moe/v3/';

function App() {

  const [anime, setAnime] = useState([]);

  const [topAnimes, setTopAnimes] = useState([]);

  const [favoriteAnimes, setFavoriteAnimes] = useState([]);

  const [search, setSearch] = useState([]);

  // Get top Animes
  const GetTopAnimes = async () => {
    const temp = await fetch(`${url}top/anime/1/bypopularity`).then(res => res.json());
    
    setTopAnimes(temp.top.slice(0, 5));
  }

  useEffect(() => {
    GetTopAnimes();

  }, []);

  // Get Animes
  const GetFavoriteAnimes = async () => {
    const temp = await fetch(`${url}top/anime/1/airing`).then(res => res.json());

    setFavoriteAnimes(temp.top.slice(0, 10));
  }

  useEffect(() => {
    GetFavoriteAnimes();

  }, []);

  // Search
  const HandleSearch = (e) => {
    e.preventDefault();

    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`${url}search/anime?q=${query}&order_by=title&sort=asc&limit=10`).then(res => res.json());

    setAnime(temp.results);
  }

  return (
    <div className="App">
      <Header />
      <Content topAnimes={topAnimes} favoriteAnimes={favoriteAnimes} HandleSearch={HandleSearch} search={search} SetSearch={setSearch} anime={anime} />
      <Footer />
    </div>
  );
}

export default App;
