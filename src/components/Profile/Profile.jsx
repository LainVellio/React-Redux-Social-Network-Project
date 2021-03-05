import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={cl.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
