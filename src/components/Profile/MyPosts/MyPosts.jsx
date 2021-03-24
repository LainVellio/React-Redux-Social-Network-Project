import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreater,
} from '../../../redux/state';

const MyPosts = (props) => {
  const post = props.posts.map((post) => {
    const user = props.users.find((item) => post.name === item.name);
    return {
      name: post.name,
      id: post.id,
      likesCount: post.likesCount,
      message: post.message,
      avatar: user.avatar,
    };
  });

  const postElements = post.map((post) => (
    <Post
      name={post.name}
      message={post.message}
      likesCount={post.likesCount}
      avatar={post.avatar}
    />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updateNewPostTextActionCreater(text);
    props.dispatch(action);
  };

  return (
    <div className={cl.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            className={cl.textarea}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button className={cl.addPost} onClick={addPost}>
            Add post
          </button>
        </div>
      </div>
      <div className={cl.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
