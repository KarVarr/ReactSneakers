import React from 'react';
import './home.scss';
import Card from '../components/Card';

export default function Home({
  searchValue,
  setSearchValue,
  items,
  onAddToFavorite,
  handleLCick,
  onChangeSearchInput,
}) {
  return (
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
          ?.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map(item => (
            <Card
              key={item.id}
              name={item.name}
              imgUrl={item.img}
              price={item.price}
              onFavorite={obj => onAddToFavorite(obj)}
              onClickPlus={obj => handleLCick(obj)}
            />
          ))}
      </div>
    </div>
  );
}
