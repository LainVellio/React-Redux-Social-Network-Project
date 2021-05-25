import Preloader from '../../common/Preloader/Preloader';
import ProfileDescription from './ProfileDescription';
import cl from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/1.png';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';
import { useState } from 'react';

const ProfileInfo = ({
  profile,
  savePhoto,
  authUserId,
  status,
  setUserStatus,
  saveProfile,
  isFetchingStatus,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setIsEditMode(false);
    });
  };

  return (
    <div className={cl.profile_content}>
      <div className={cl.description_block}>
        <div className={cl.photo_block}>
          <img
            className={cl.avatar}
            src={profile.photos.large || userPhoto}
            alt="ava"
          />
          {authUserId === profile.userId && (
            <div className={cl.load_photo_block}>
              <label className={cl.button} htmlFor="photo">
                Загрузить аватарку
              </label>
              <input
                onChange={onMainPhotoSelected}
                className={cl.load_photo_input}
                type="file"
                id="photo"
              />
            </div>
          )}
        </div>
        <div className={cl.description}>
          <div className={cl.fullName}>{profile.fullName}</div>

          <ProfileStatus
            profileUserId={profile.userId}
            status={status}
            setUserStatus={setUserStatus}
            authUserId={authUserId}
            isFetchingStatus={isFetchingStatus}
          />
          {isEditMode ? (
            <ProfileDataForm initialValues={profile} onSubmit={onSubmit} />
          ) : (
            <ProfileDescription
              profile={profile}
              setIsEditMode={setIsEditMode}
              authUserId={authUserId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
