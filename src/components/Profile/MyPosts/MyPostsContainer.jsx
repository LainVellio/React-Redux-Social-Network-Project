import { addPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return { profilePage: state.profilePage, auth: state.auth };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
})(MyPosts);

export default MyPostsContainer;
