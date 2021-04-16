import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css';

const Navbar = (props) => {
  const getUserProfile = () => props.getUserProfile(props.userId);

  return (
    <nav className={`${cl.nav} ${'block'}`}>
      <div className={cl.links}>
        <div className={cl.item}>
          <NavLink
            to={!props.userId ? `/login` : `/profile/${props.userId}`}
            onClick={getUserProfile}
            activeClassName={cl.active}
          >
            My profile
          </NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/dialogs" activeClassName={cl.active}>
            Messages
          </NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/news" activeClassName={cl.active}>
            News
          </NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/music" activeClassName={cl.active}>
            Music
          </NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/settings" activeClassName={cl.active}>
            Settings
          </NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/users" activeClassName={cl.active}>
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
