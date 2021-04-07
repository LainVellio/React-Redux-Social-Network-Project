import Preloader from '../../common/Preloader/Preloader';
import ProfileDescription from './ProfileDescription';
import cl from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/1.png';

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
        <ProfileDescription profile={props.profile} />
      </div>
    </div>
  );
};

export default ProfileInfo;
