import React, { useContext } from 'react';
import AppContext from '../context';

export default function Info({title, image, description}) {
const { setCardOpened } = useContext(AppContext);

  return (
    <div className='empty'>
      <div className='empty__img'>
        <img width={120} height={120} src={image} alt='bean' />
      </div>
      <div className='empty__text'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <button
          onClick={() => setCardOpened(false)}
          className='greenButton empty__btn'
        >
          <img src='/img/arrowBack.svg' alt='' /> Вернуться назад
        </button>
      </div>
    </div>
  );
}
