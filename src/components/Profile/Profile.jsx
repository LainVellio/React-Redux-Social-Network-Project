import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={`${cl.profile} ${'block'}`}>
      <div>
        <ProfileInfo />
      </div>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
