import React, { useEffect, useState } from 'react';
import './index.scss';

import Footer from './components/Footer';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

export default function App() {
  const [items, setItems] = useState([]);

useEffect(() => {
  fetch('https://62fe734fa85c52ee4837d620.mockapi.io/items')
    .then(res => {
      return res.json();
    })
    .then(json => {
      setItems(json);
    });
}, [])
    
    
  

  const handleLCick = () => {
    console.log('heloo cliki');
  };

  const [cardOpened, setCardOpened] = useState(false);

  return (
    <div className='wrapper'>
      {/* BEAN */}
      {cardOpened && <Drawer onClickRemove={() => setCardOpened(false)} />}
      {/* HEADER  */}
      <Header onClickAdd={() => setCardOpened(true)} />
      {/* CONTENT */}
      <div className='content'>
        <div className='content__title'>
          <h1>Все кроссовки</h1>

          <div className='content__search'>
            <img src='/img/search.svg' alt='Search' />
            <input type='text' placeholder='Поиск...' />
          </div>
        </div>

        <div className='content__sneakers'>
          {/* CARD HERE */}
          {items.map(item => (
            <Card
              name={item.name}
              imgUrl={item.img}
              price={item.price}
              onClickFavorite={handleLCick}
              onClickPlus={handleLCick}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
