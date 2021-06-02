import React, { useEffect, useState } from 'react';
import MiniPreloader from '../../common/Preloader/MiniPreloader';
import cl from './ProfileInfo.module.css';

const ProfileStatus = ({
  status,
  authUserId,
  profileUserId,
  setUserStatus,
  isFetchingStatus,
}) => {
  const [editModeStatus, setEditModeStatus] = useState(false);
  const [editedStatus, setEditedStatus] = useState(status);

  const isMyPage = authUserId === profileUserId;

  const activateEditModeStatus = () => {
    setEditModeStatus(true);
  };

  const deactivateEditModeStatus = () => {
    setEditModeStatus(false);
    setUserStatus(editedStatus);
    setEditedStatus(status);
  };

  const onStatusChange = (e) => {
    const status = e.currentTarget.value;
    const maxLengthStatus = 30;
    setEditedStatus(status.slice(0, maxLengthStatus));
  };

  useEffect(() => setEditedStatus(status), [status]);

  return (
    <div className={cl.statusBlock}>
      {isFetchingStatus ? (
        <MiniPreloader />
      ) : !isMyPage ? (
        <div className={cl.value}>{editedStatus || 'Статус отсутсвует'}</div>
      ) : !editModeStatus ? (
        <div
          className={cl.myPageValue + ' ' + cl.pointer}
          onClick={activateEditModeStatus}
        >
          {editedStatus || 'Статус отсутсвует'}
        </div>
      ) : (
        <input
          onChange={onStatusChange}
          className={cl.input}
          autoFocus={true}
          onBlur={deactivateEditModeStatus}
          value={editedStatus}
        ></input>
      )}
    </div>
  );
};

export default ProfileStatus;
