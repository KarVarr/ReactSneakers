export default function Drawer({ onClickRemove }) {
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
          <div className='items__flex--top'>
            {/* SNEAKERS */}
            <div className='cart__item'>
              <div className='item__img'>
                <img
                  width={70}
                  height={70}
                  src='/img/sneakers1.png'
                  alt='Sneakers'
                />
              </div>
              <div className='item__text'>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className='remove__btn'
                src='/img/closeSvg.svg'
                alt='remove'
              />
            </div>
            <div className='cart__item'>
              <div className='item__img'>
                <img
                  width={70}
                  height={70}
                  src='/img/sneakers1.png'
                  alt='Sneakers'
                />
              </div>
              <div className='item__text'>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className='remove__btn'
                src='/img/closeSvg.svg'
                alt='remove'
              />
            </div>
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
            <button className='greenButton'>
              Оформить заказ <img src='/img/arrow.svg' alt='arrow' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}