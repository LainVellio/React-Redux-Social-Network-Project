import { NavLink } from 'react-router-dom';
import cl from './Header.module.css';

const Header = (props) => {
  return (
    <header className={cl.header}>
      <img
        src="https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/tripit-512.png"
        alt="logo"
      ></img>
      <div className={cl.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
