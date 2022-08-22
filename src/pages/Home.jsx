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
  cardItems,
  added,
}) {
  const renderItems = () => {
    return items
      ?.filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map(item => (
        <Card
          key={item.id}
          name={item.name}
          imgUrl={item.img}
          price={item.price}
          added={cardItems?.some(obj => +obj.id === +item.id)}
          onFavorite={obj => onAddToFavorite(obj)}
          onClickPlus={obj => handleLCick(obj)}
          loading={false}
        />
      ));
  };
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
        {renderItems()}
      </div>
    </div>
  );
}
