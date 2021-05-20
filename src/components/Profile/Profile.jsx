import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={`${cl.profile} ${'block'}`}>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <div>
          <div>
            <ProfileInfo
              profile={props.profile}
              status={props.status}
              updateUserStatus={props.updateUserStatus}
              authUserId={props.authUserId}
              savePhoto={props.savePhoto}
              saveProfile={props.saveProfile}
              setUserStatus={props.setUserStatus}
              isFetchingStatus={props.isFetchingStatus}
              isFetchingProfileInfo={props.isFetchingProfileInfo}
            />
          </div>
          <MyPostsContainer />
        </div>
      )}
    </div>
  );
};

export default Profile;
