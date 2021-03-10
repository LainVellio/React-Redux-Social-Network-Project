import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  const postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 15 },
  ];

  const postElements = postsData.map((post) => (
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
