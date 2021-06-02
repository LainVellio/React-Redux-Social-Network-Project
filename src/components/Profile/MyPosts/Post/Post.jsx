import cl from './Post.module.css';

const Post = ({ avatar, name, message, likesCount }) => {
  return (
    <div className={cl.item}>
      <img src={avatar} alt="Avatar"></img>
      <span className={cl.name}>{name}</span>
      <div className={cl.message}>{message}</div>
      <div className={cl.like}>
        <span className={cl.likeCount}>{likesCount} </span>
        <img
          src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/like-256.png"
          alt="like"
        />
      </div>
    </div>
  );
};

export default Post;
