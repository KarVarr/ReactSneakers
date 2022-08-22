import { Link } from 'react-router-dom';
import './header.scss';

export default function Header({ onClickAdd }) {
  return (
    <header>
      <Link to='/'>
        <div className='header__logo'>
          <img width={40} height={40} src='/img/logo.svg' alt='logo' />
          <div className='header__info'>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div className='header__price'>
        <div className='price' onClick={onClickAdd}>
          <img width={18} height={18} src='/img/bean.svg' alt='cart' />
          <span>1205 rub.</span>
        </div>
        <div className='header__icon'>
          <Link to='/favorites'>
            <img src='./img/favorite.svg' alt='favorite' />
          </Link>

          <img src='./img/profile.svg' alt='profile' />
        </div>
      </div>
    </header>
  );
}
