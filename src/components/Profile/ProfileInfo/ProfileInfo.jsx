import Preloader from '../../common/Preloader/Preloader';
import cl from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={cl.profile_content}>
      <div className={cl.img_block}>
        <img
          src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="ProfileImage"
        />
      </div>
      <div className={cl.description_block}>
        <img className={cl.avatar} src={props.profile.photos.large} alt="ava" />
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
