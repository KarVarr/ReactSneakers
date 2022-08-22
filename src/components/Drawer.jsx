import './drawer.scss';

export default function Drawer({ onClickRemove, items = [], onRemove }) {
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
                {items.map((obj) => (
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
                <button className='greenButton'>
                  Оформить заказ <img src='/img/arrow.svg' alt='arrow' />
                </button>
              </div>
            </div>
          ) : (
            <div className='empty'>
              <div className='empty__img'>
                <img width={120} height={120} src='/img/box.png' alt='bean' />
              </div>
              <div className='empty__text'>
                <h3>Корзина пустая</h3>
                <p>
                  Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                </p>
              </div>
              <div>
                <button
                  onClick={onClickRemove}
                  className='greenButton empty__btn'
                >
                  <img src='/img/arrowBack.svg' alt='' /> Вернуться назад
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
