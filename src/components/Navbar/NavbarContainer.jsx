import { connect } from 'react-redux';
import Navbar from './Navbar';
import { getUserProfile } from '../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};

const NavbarContainer = connect(mapStateToProps, { getUserProfile })(Navbar);

export default NavbarContainer;
