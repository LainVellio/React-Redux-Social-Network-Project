import DescriptionString from '../ProfileInfo/DescriptionString/DescriptionString';
import cl from './ProfileInfo.module.css';

const ProfileDescription = ({
  profile,
  setIsEditMode,
  authUserId,
  isFetchingProfileInfo,
}) => {
  const onEditMode = () => {
    setIsEditMode(true);
  };

  return (
    <div>
      <DescriptionString label="ФИО" value={profile.fullName} link={false} />
      <DescriptionString label="О себе" value={profile.aboutMe} link={false} />
      <DescriptionString
        label="О поиске работы"
        value={profile.lookingForAJobDescription}
        link={false}
      />
      <DescriptionString
        label="Facebook"
        value={profile.contacts.facebook}
        link={true}
      />
      <DescriptionString
        label="Website"
        value={profile.contacts.website}
        link={true}
      />
      <DescriptionString
        label="Вконтакте"
        value={profile.contacts.vk}
        link={true}
      />
      <DescriptionString
        label="Twitter"
        value={profile.contacts.twitter}
        link={true}
      />
      <DescriptionString
        label="Instagram"
        value={profile.contacts.instagram}
        link={true}
      />
      <DescriptionString
        label="YouTube"
        value={profile.contacts.youtube}
        link={true}
      />
      <DescriptionString
        label="GitHub"
        value={profile.contacts.github}
        link={true}
      />
      <DescriptionString
        label="MainLink"
        value={profile.contacts.mainLink}
        link={true}
      />
      {authUserId === profile.userId && (
        <div className={cl.edit_profile}>
          <button
            className={cl.button}
            onClick={onEditMode}
            disabled={isFetchingProfileInfo}
          >
            Редактировать
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDescription;
