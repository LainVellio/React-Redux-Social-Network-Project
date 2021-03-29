import {
  addPostActionCreator,
  updateNewPostTextActionCreater,
} from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: (text) => {
      const action = updateNewPostTextActionCreater(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
