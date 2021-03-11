import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

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
      <div className={cl.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
