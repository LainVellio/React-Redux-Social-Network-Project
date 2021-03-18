import cl from './Post.module.css';

const Post = (props) => {
  return (
    <div className={cl.item}>
      <img src={props.avatar} alt="Avatar"></img>
      <span className={cl.name}>{props.name}</span>

      <div className={cl.message}>{props.message}</div>

      <div className={cl.like}>
        <span className={cl.likeCount}>{props.likesCount} </span>
        <img
          src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/like-256.png"
          alt="like"
        />
      </div>
    </div>
  );
};

export default Post;
