import React, { useContext } from 'react';
import './home.scss';
import Card from '../components/Card';
import AppContext from '../context';

export default function Home({
  searchValue,
  setSearchValue,
  items,
  onAddToFavorite,
  handleLCick,
  onChangeSearchInput,
  isLoading,
}) {
  //const {isItemAdded} = useContext(AppContext)

  const renderItems = () => {
    const filtredItems = items?.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      isLoading ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] : filtredItems
    ).map(item => (
      <Card
        key={item.id}
        name={item.name}
        imgUrl={item.img}
        price={item.price}
       // added={isItemAdded(item && item.id)}
        onFavorite={obj => onAddToFavorite(obj)}
        onClickPlus={obj => handleLCick(obj)}
        loading={isLoading}
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
