import cl from './Post.module.css';

const Post = (props) => {
  return (
    <div className={cl.item}>
      <img
        src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-256.png"
        alt="Avatar"
      ></img>
      {props.message}
      <div>
        <span className={cl.like}>{props.likesCount} like</span>
      </div>
    </div>
  );
};

export default Post;
