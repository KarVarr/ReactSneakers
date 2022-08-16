import React from 'react';

export default function Card({ price, imgUrl, name }) {
  return (
    <div className='card'>
      <div className='card__favorite'>
        <img src='/img/likeEmpty.svg' alt='likeEmpty' />
      </div>
      <div className='card__img'>
        <img width={133} height={112} src={imgUrl}alt='' />
      </div>

      <p>{name}</p>
      <div className='card__bottom'>
        <div className='card__price'>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img src='/img/plus.svg' alt='plus' />
      </div>
    </div>
  );
}
