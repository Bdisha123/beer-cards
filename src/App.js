// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerList from './components/BeerList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://api.sampleapis.com/beers/ale');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBeers();
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Beer Cards</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BeerList beers={filteredBeers} />
    </div>
  );
};

export default App;
