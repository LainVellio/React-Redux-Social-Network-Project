import { addPost, updateNewPostText } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPosts);

export default MyPostsContainer;
