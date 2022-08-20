import React, {  useState } from 'react';
import './card.scss';

export default function Card({
  price,
  imgUrl,
  name,
  onClickFavorite,
  onClickPlus,
}) {
  const [isAdded, setIsAdded] = useState(true);
  const [isFavorite, setIsFavorite] = useState(true);

  const hendlePlus = () => {
    onClickPlus({ price, imgUrl, name });
    setIsAdded(!isAdded)
  }

  
  return (
    <div className='card'>
      <div className='card__favorite' onClick={onClickFavorite}>
        <img onClick={() => setIsFavorite(!isFavorite)} src={isFavorite ? '/img/likeEmpty.svg' : '/img/like.svg'} alt='likeEmpty' />
      </div>
      <div className='card__img'>
        <img width={133} height={112} src={imgUrl} alt='sneakers?_photo' />
      </div>

      <p>{name}</p>
      <div className='card__bottom'>
        <div className='card__price'>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          onClick={hendlePlus}
          src={isAdded ? '/img/plus.svg' : '/img/plus_done.svg'}
          alt='plus'
        />
      </div>
    </div>
  );
}
