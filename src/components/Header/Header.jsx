import { NavLink } from 'react-router-dom';
import cl from './Header.module.css';

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={cl.header}>
      <img
        src="https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/tripit-512.png"
        alt="logo"
      ></img>
      <div className={cl.loginBlock}>
        {isAuth ? (
          <div>
            {login}
            <button className={cl.logout} onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
