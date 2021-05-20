import { useState } from 'react';
import DescriptionString from '../../common/DescriptionString/DescriptionString';
import st from './ProfileInfo.module.css';

const ProfileDescription = ({
  profile,
  authUserId,
  saveProfile,
  isFetchingProfileInfo,
}) => {
  const [isEditModeProfile, setIsEditModeProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    ...profile,
    contacts: {
      ...profile.contacts,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    isEditModeProfile && saveProfile(editedProfile);
    setIsEditModeProfile(!isEditModeProfile);
  };

  const handleChange = (fieldName) => (fieldValue) => {
    setEditedProfile({
      ...editedProfile,
      contacts: { ...editedProfile.contacts, [fieldName]: fieldValue },
    });
  };

  const handleChangeInfo = (fieldName) => (fieldValue) => {
    setEditedProfile({
      ...editedProfile,
      [fieldName]: fieldValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <DescriptionString
        label="О себе"
        value={editedProfile.aboutMe}
        onChange={handleChangeInfo('aboutMe')}
        isEditModeProfile={isEditModeProfile}
        link={false}
        isFetchingProfileInfo={isFetchingProfileInfo}
      />
      <DescriptionString
        label="О поиске работы"
        value={editedProfile.lookingForAJobDescription}
        onChange={handleChangeInfo('lookingForAJobDescription')}
        isEditModeProfile={isEditModeProfile}
        link={false}
        isFetchingProfileInfo={isFetchingProfileInfo}
      />
      <DescriptionString
        label="Facebook"
        value={editedProfile.contacts.facebook}
        onChange={handleChange('facebook')}
        isEditModeProfile={isEditModeProfile}
        link={true}
        isFetchingProfileInfo={isFetchingProfileInfo}
      />
      <DescriptionString
        label="Website"
        value={editedProfile.contacts.website}
        onChange={handleChange('website')}
        isEditModeProfile={isEditModeProfile}
        link={true}
        isFetchingProfileInfo={isFetchingProfileInfo}
      />
      <DescriptionString
        label="Вконтакте"
        value={editedProfile.contacts.vk}
        onChange={handleChange('vk')}
        isEditModeProfile={isEditModeProfile}
        link={true}
        isFetchingProfileInfo={isFetchingProfileInfo}
      />
      <DescriptionString
        label="Twitter"
        value={editedProfile.contacts.twitter}
        onChange={handleChange('twitter')}
        isEditModeProfile={isEditModeProfile}
        link={true}
        isFetchingProfileInfo={isFetchingProfileInfo}
      />
      <DescriptionString
        label="Instagram"
        value={editedProfile.contacts.instagram}
        onChange={handleChange('instagram')}
        isEditModeProfile={isEditModeProfile}
        link={true}
        isFetchingProfileInfo={isFetchingProfileInfo}
      />
      <DescriptionString
        label="YouTube"
        value={editedProfile.contacts.youtube}
        onChange={handleChange('youtube')}
        isEditModeProfile={isEditModeProfile}
        link={true}
        isFetchingProfileInfo={isFetchingProfileInfo}
      />
      <DescriptionString
        label="GitHub"
        value={editedProfile.contacts.github}
        onChange={handleChange('github')}
        isEditModeProfile={isEditModeProfile}
        link={true}
        isFetchingProfileInfo={isFetchingProfileInfo}
      />
      <DescriptionString
        label="MainLink"
        value={editedProfile.contacts.mainLink}
        onChange={handleChange('mainLink')}
        isEditModeProfile={isEditModeProfile}
        link={true}
        isFetchingProfileInfo={isFetchingProfileInfo}
      />
      <div className={st.edit_profile}>
        {authUserId === profile.userId && (
          <button className={st.button} disabled={isFetchingProfileInfo}>
            {isEditModeProfile ? 'Сохранить профиль' : 'Редактировать профиль'}
          </button>
        )}
      </div>
    </form>
  );
};

export default ProfileDescription;
