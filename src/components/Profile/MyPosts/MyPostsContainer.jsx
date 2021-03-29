import {
  addPostActionCreator,
  updateNewPostTextActionCreater,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreater(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      profilePage={state.profilePage}
      updateNewPostText={onPostChange}
      addPost={addPost}
    />
  );
};

export default MyPostsContainer;
