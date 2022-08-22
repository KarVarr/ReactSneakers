import React, { useEffect, useState } from 'react';
import './index.scss';
import {
  Route,
  Routes,
  
} from 'react-router-dom';
import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

export default function App() {
  const [items, setItems] = useState([]);
  const [cardItems, setCardItmes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cardOpened, setCardOpened] = useState(false);

  // API
  useEffect(() => {
    // fetch('https://62fe734fa85c52ee4837d620.mockapi.io/items')
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(json => {
    //     setItems(json);
    //   });

    axios.get('https://62fe734fa85c52ee4837d620.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://62fe734fa85c52ee4837d620.mockapi.io/cart').then(res => {
      setCardItmes(res.data);
    });
    axios
      .get('https://62fe734fa85c52ee4837d620.mockapi.io/favorites')
      .then(res => {
        setFavorites(res.data);
      });
  }, []);

  const handleLCick = obj => {
    axios.post('https://62fe734fa85c52ee4837d620.mockapi.io/cart', obj);
    setCardItmes(prev => [...prev, obj]);
  };

  const removeItem = id => {
    axios.delete(`https://62fe734fa85c52ee4837d620.mockapi.io/cart/${id}`);
    setCardItmes(prev => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async obj => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(
          `https://62fe734fa85c52ee4837d620.mockapi.io/favorites/${obj.id}`
        );
        setFavorites(prev => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          'https://62fe734fa85c52ee4837d620.mockapi.io/favorites',
          obj
        );
        setFavorites(prev => [...prev, data]);
      }
    } catch(error) {
      alert('Try again')
    } 
    
  };
  const onChangeSearchInput = e => {
    setSearchValue(e.target.value);
  };

  return (
    <div className='wrapper'>
      {/* BEAN */}
      {cardOpened && (
        <Drawer
          items={cardItems}
          onClickRemove={() => setCardOpened(false)}
          onRemove={removeItem}
        />
      )}
      {/* HEADER  */}
      <Header onClickAdd={() => setCardOpened(true)} />

      {/* CONTENT */}
      <Routes>
        <Route
          path='/'
          element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              items={items}
              onAddToFavorite={onAddToFavorite}
              onChangeSearchInput={onChangeSearchInput}
              handleLCick={handleLCick}
            />
          }
        />
        <Route
          path='/favorites'
          element={
            <Favorites
              items={favorites}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
      </Routes>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
