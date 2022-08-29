import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context';
import Card from '../components/Card';
import './home.scss';
import axios from 'axios';

export default function Orders({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
}) {
  const { onAddToFavorite, handleLCick } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://62fe734fa85c52ee4837d620.mockapi.io/orders'
        );
        setOrders(data.map(obj => obj[0]).flat());
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов!');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className='content'>
      <div className='content__title'>
        <h1>Мои заказы</h1>
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
        {isLoading
          ? [...Array(8)]
          : orders
              ?.filter(item =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map(item => (
                <Card
                  key={item.id}
                  loading={isLoading}
                  {...item}
                />
              ))}
      </div>
    </div>
  );
}
