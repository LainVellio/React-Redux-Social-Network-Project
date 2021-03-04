import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New Post</div>
        <div className={classes.posts}>
          <div className={classes.item}>Post 1</div>
          <div className={classes.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
