import React, { useContext } from 'react';
import AppContext from '../context';
import Card from '../components/Card';
import './home.scss';

export default function Favorites({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  favorited,
  onAddToFavorite,
}) {
  const { favorites } = useContext(AppContext);

  return (
    <div className='content'>
      <div className='content__title'>
        <h1>Мои закладки</h1>
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
        {favorites
          ?.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map(item => (
            <Card
              key={item.id}
              favorited={false}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}
