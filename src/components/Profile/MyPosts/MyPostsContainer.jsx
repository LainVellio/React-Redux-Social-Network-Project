import {
  addPostActionCreator,
  updateNewPostTextActionCreater,
} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const addPost = () => store.dispatch(addPostActionCreator());

        const onPostChange = (text) => {
          const action = updateNewPostTextActionCreater(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            profilePage={state.profilePage}
            updateNewPostText={onPostChange}
            addPost={addPost}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
