import {useState, useEffect} from 'react';
import Header from './components/Header/Header';

import {Api} from './api/Api';

import './App.css';

function App() {

  const [animes,SetAnimes] = useState([]);

  const [topAnimes, setTopAnimes] = useState([]);

  const [search, setSearch] = useState([]);

  return (
    <>
      <Header />
      <div>
        
      </div>
    </>
  );
}

export default App;
