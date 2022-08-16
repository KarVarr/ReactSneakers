import React from 'react';
import './index.scss';

import Footer from './components/Footer';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    id: 1,
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    img: '/img/sneakers1.png',
  },
  {
    id: 2,
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    img: '/img/sneakers2.png',
  },
  {
    id: 3,
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    img: '/img/sneakers3.png',
  },
  {
    id: 4,
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    img: '/img/sneakers4.png',
  },
  {
    id: 5,
    name: 'Мужские Кроссовки Under Armour Curry 8',
    price: 15199,
    img: '/img/sneakers5.png',
  },
  {
    id: 6,
    name: 'Мужские Кроссовки Nike Kyrie 7',
    price: 11299,
    img: '/img/sneakers6.png',
  },
  {
    id: 7,
    name: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 10799,
    img: '/img/sneakers7.png',
  },
  {
    id: 8,
    name: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 16499,
    img: '/img/sneakers8.png',
  },
  {
    id: 9,
    name: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 13999,
    img: '/img/sneakers9.png',
  },
  {
    id: 10,
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    img: '/img/sneakers1.png',
  },
  {
    id: 11,
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    img: '/img/sneakers4.png',
  },
  {
    id: 12,
    name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: 11299,
    img: '/img/sneakers10.png',
  },
  
];



export default function App() {
  return (
    <div className='wrapper'>
      {/* BEAN */}
      <Drawer />
      {/* HEADER  */}
      <Header />
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
          {arr.map(item => <Card name={item.name} imgUrl={item.img} price={item.price}/> )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
