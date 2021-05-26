import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const HeaderContainer = connect(mapStateToProps, { logout })(Header);

export default HeaderContainer;
