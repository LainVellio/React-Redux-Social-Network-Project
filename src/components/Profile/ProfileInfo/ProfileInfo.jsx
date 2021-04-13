import Preloader from '../../common/Preloader/Preloader';
import ProfileDescription from './ProfileDescription';
import cl from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/1.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={cl.profile_content}>
      <div className={cl.description_block}>
        <img
          className={cl.avatar}
          src={props.profile.photos.large || userPhoto}
          alt="ava"
        />
        <div className={cl.description}>
          <div className={cl.fullName}>{props.profile.fullName}</div>
          <ProfileStatus
            profile={props.profile}
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
          <ProfileDescription profile={props.profile} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
