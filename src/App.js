import {useState, useEffect} from 'react';

import Header from './components/Header/Header';
import Content from './components/Content/Content';


import './App.css';

/* const url = 'https://api.jikan.moe/v3/top/type/page/subtype'; */

function App() {

  const [animes,SetAnimes] = useState([]);

  const [topAnimes, setTopAnimes] = useState([]);

  const [search, setSearch] = useState([]);

  const GetTopAnimes = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`).then(res => res.json());
    
    setTopAnimes(temp.top.slice(0, 5));
  }

  useEffect(() => {
    GetTopAnimes();

    console.log(topAnimes);
  }, [])

  return (
    <div className="App">
      <Header />
      <Content topAnimes={topAnimes}/>
    </div>
  );
}

export default App;
