import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import Footer from './components/Footer';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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
  }, []);

  const handleLCick = obj => {
    axios.post('https://62fe734fa85c52ee4837d620.mockapi.io/cart', obj);
    setCardItmes(prev => [...prev, obj]);
  };

  const removeItem = id => {
    axios.delete(`https://62fe734fa85c52ee4837d620.mockapi.io/cart/${id}`);
    setCardItmes(prev => prev.filter(item => item.id !== id));
  };
  const onFavorite = (obj) => {
    axios.post('https://62fe734fa85c52ee4837d620.mockapi.io/favorites', obj);
    setFavorites(prev => [...prev, obj])
  }
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
      <div className='content'>
        <div className='content__title'>
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : `Все кроссовки`}
          </h1>

          <div className='content__search'>
            <img src='/img/search.svg' alt='Search' />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              type='text'
              placeholder='Поиск...'
            />
            {searchValue && (
              <img
                className='input__close'
                onClick={() => {
                  setSearchValue('');
                }}
                src='/img/closeSvg.svg'
                alt='close'
              />
            )}
          </div>
        </div>

        <div className='content__sneakers'>
          {/* CARD HERE */}
          {items
            .filter(item =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map(item => (
              <Card
                key={item.id}
                name={item.name}
                imgUrl={item.img}
                price={item.price}
                onClickFavorite={obj => onFavorite(obj)}
                onClickPlus={obj => handleLCick(obj)}
              />
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
