import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({
  profile,
  savePhoto,
  authUserId,
  status,
  saveProfile,
  setUserStatus,
  isFetchingStatus,
  isFetching,
  isFetchingProfileInfo,
  user,
}) => {
  return (
    <div className={`${cl.profile} ${'block'}`}>
      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          <div>
            <ProfileInfo
              profile={profile}
              savePhoto={savePhoto}
              authUserId={authUserId}
              status={status}
              saveProfile={saveProfile}
              setUserStatus={setUserStatus}
              isFetchingStatus={isFetchingStatus}
              isFetchingProfileInfo={isFetchingProfileInfo}
              user={user}
            />
          </div>
          <MyPostsContainer />
        </div>
      )}
    </div>
  );
};

export default Profile;
