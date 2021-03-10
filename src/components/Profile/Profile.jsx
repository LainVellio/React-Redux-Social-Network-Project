import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 15 },
  ];

  return (
    <div className={cl.profile}>
      <ProfileInfo />
      <MyPosts post={postsData} />
    </div>
  );
};

export default Profile;
