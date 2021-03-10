import cl from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg"
          alt="ProfileImage"
        ></img>
      </div>
      <div className={cl.description_block}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
