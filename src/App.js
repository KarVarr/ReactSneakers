import React, { useEffect, useState } from 'react';
import './index.scss';
import { Route, Routes } from 'react-router-dom';
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

    async function fatchData() {
      const itemsRespons = await axios.get(
        'https://62fe734fa85c52ee4837d620.mockapi.io/items'
      );
      const cartRespons = await axios.get(
        'https://62fe734fa85c52ee4837d620.mockapi.io/cart'
      );
      const favoritesRespons = await axios.get(
        'https://62fe734fa85c52ee4837d620.mockapi.io/favorites'
      );

      setCardItmes(cartRespons.data);
      setFavorites(favoritesRespons.data);
      setItems(itemsRespons.data);
    }

    fatchData()
  }, []);

  const handleLCick = obj => {
    try {
      if (cardItems.find(item => +item.id === +obj.id)) {
        axios.delete(
          `https://62fe734fa85c52ee4837d620.mockapi.io/cart/${obj.id}`
        );
        setCardItmes(prev => prev.filter(item => +item.id !== +obj.id));
      } else {
        axios.post('https://62fe734fa85c52ee4837d620.mockapi.io/cart', obj);
        setCardItmes(prev => [...prev, obj]);
      }
    } catch (error) {
      alert('Try again');
    }
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
    } catch (error) {
      alert('Try again');
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
              cardItems={cardItems}
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
