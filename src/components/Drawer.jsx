import axios from 'axios';
import React, { useContext, useState } from 'react';
import AppContext from '../context';
import './drawer.scss';
import Info from './Info';

export default function Drawer({ onClickRemove, items = [], onRemove }) {
  const { cartItems, setCardItmes } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://62fe734fa85c52ee4837d620.mockapi.io/orders',
        cartItems
      );
      axios.put('https://62fe734fa85c52ee4837d620.mockapi.io/cart', []);
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCardItmes([]);
    } catch (error) {
      alert('Не удалось создать заказ!');
    }
    setIsLoading(false);
  };
  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2>
          Корзина
          <img
            className='remove__btn'
            src='/img/closeSvg.svg'
            alt='remove'
            onClick={onClickRemove}
          />
        </h2>
        <div className='items'>
          {items.length > 0 ? (
            <div className='items__flex'>
              <div className='items__flex--top'>
                {/* SNEAKERS */}
                {items.map(obj => (
                  <div key={obj.id} className='cart__item'>
                    <div className='item__img'>
                      <img
                        width={70}
                        height={70}
                        src={obj.imgUrl}
                        alt='Sneakers'
                      />
                    </div>
                    <div className='item__text'>
                      <p>{obj.name}</p>
                      <b>{obj.price}руб.</b>
                    </div>
                    <img
                      className='remove__btn'
                      src='/img/closeSvg.svg'
                      alt='remove'
                      onClick={() => onRemove(obj.id)}
                    />
                  </div>
                ))}
              </div>
              {/* PRICE TAX */}
              <div className='items__flex--bottom'>
                <ul className='cart__totalBlock'>
                  <li>
                    <span>Итого: </span>
                    <div></div>
                    <b>21 498 руб. </b>
                  </li>
                  <li>
                    <span>Налог 5%: </span>
                    <div></div>
                    <b>1074 руб. </b>
                  </li>
                </ul>
                <button
                  disabled={isLoading}
                  onClick={onClickOrder}
                  className='greenButton'
                >
                  Оформить заказ <img src='/img/arrow.svg' alt='arrow' />
                </button>
              </div>
            </div>
          ) : (
            <Info
              title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
              description={
                isOrderComplete
                  ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                  : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
              }
              image={
                isOrderComplete ? '/img/compliteOrder.png' : '/img/box.png'
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
