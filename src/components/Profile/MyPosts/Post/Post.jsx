import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-256.png"></img>{' '}
      {props.message}
      <div>
        <span className={classes.like}>like</span>
      </div>
    </div>
  );
};

export default Post;
