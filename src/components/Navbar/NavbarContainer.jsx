import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};

const NavbarContainer = connect(mapStateToProps, {})(Navbar);

export default NavbarContainer;
