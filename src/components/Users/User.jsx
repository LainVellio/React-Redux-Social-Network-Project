import { NavLink } from 'react-router-dom';
import cl from './Users.module.css';
import userPhoto from '../../assets/images/1.png';
import FolloUnfollowButton from '../common/FollowUnfollowButton/FollowUnfollowButton';

const User = ({ user }) => (
  <div className={`${cl.user} ${'block'}`} key={user.id}>
    <div className={cl.leftBlock}>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img
            className={cl.avatar}
            src={user.photos.small != null ? user.photos.small : userPhoto}
            alt="ava"
          />
        </NavLink>
      </div>
      <div>
        <FolloUnfollowButton user={user} />
      </div>
    </div>
    <div className={cl.rightBlock}>
      <NavLink to={'/profile/' + user.id}>
        <div className={cl.name}>{user.name}</div>
        <div className={cl.status}>{user.status}</div>
      </NavLink>
    </div>
  </div>
);

export default User;
