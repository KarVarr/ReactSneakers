import React, { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../context';
import './card.scss';

export default function Card({
  id,
  price,
  imgUrl,
  name,
  onFavorite,
  onClickPlus,
  favorited = true,
  //added = true,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext);
  //const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const hendlePlus = () => {
    onClickPlus({ id, price, imgUrl, name });
    //setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, price, imgUrl, name });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='card'>
      {loading ? (
        <ContentLoader
          speed={2}
          width={230}
          height={250}
          viewBox='0 0 230 220'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect x='0' y='20' rx='10' ry='10' width='170' height='101' />
          <rect x='0' y='130' rx='3' ry='3' width='150' height='15' />
          <rect x='0' y='150' rx='3' ry='3' width='93' height='15' />
          <rect x='0' y='190' rx='8' ry='8' width='81' height='24' />
          <rect x='138' y='184' rx='8' ry='8' width='32' height='32' />
        </ContentLoader>
      ) : (
        <>
          <div className='card__favorite' onClick={onClickFavorite}>
            <img
              src={isFavorite ? '/img/likeEmpty.svg' : '/img/like.svg'}
              alt='likeEmpty'
            />
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
              src={isItemAdded(id) ? '/img/plus_done.svg' : '/img/plus.svg'}
              alt='plus'
            />
          </div>
        </>
      )}
    </div>
  );
}
