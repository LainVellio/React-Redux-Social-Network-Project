import { NavLink } from 'react-router-dom';
import cl from '../Dialogs.module.css';
import userPhoto from '../../../assets/images/1.png';

const DialogItem = ({ id, avatar, name, setSelectedUserId }) => {
  const onUserDialog = () => {
    setSelectedUserId(id);
  };
  return (
    <div className={`${cl.dialog}`}>
      <NavLink
        activeClassName={cl.active}
        to={`/dialogs/${id}`}
        onClick={onUserDialog}
      >
        <div className={cl.sidebarFriend}>
          <img className={cl.avatar} src={avatar || userPhoto} alt="ava" />
          <div className={cl.friendName}>{name}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
