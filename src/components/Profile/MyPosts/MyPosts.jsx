import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const state = props.profilePage;

  const post = state.posts.map((post) => {
    const user = state.users.find((item) => post.name === item.name);
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

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={cl.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            className={cl.textarea}
            value={state.newPostText}
          />
        </div>
        <div>
          <button className={cl.addPost} onClick={onAddPost}>
            Add post
          </button>
        </div>
      </div>
      <div className={cl.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
