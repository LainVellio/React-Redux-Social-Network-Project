import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={`${cl.profile} ${'block'}`}>
      <div>
        <ProfileInfo />
      </div>
      <MyPosts posts={props.state.posts} users={props.users} />
    </div>
  );
};

export default Profile;
