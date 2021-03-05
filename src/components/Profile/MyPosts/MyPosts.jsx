import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={cl.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={cl.posts}>
        <Post message="Hi, how are you?" />
        <Post message="It's my first post" />
      </div>
    </div>
  );
};

export default MyPosts;
