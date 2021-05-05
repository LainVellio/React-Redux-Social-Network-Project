import React, { useEffect, useState } from 'react';
import cl from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
  const [editModeCommonStatus, setEditModeCommonStatus] = useState(false);
  const [editModeJobStatus] = useState(false);
  const [commonStatus, setCommonStatus] = useState(props.status);
  const [maxLengthStatus] = useState(30);

  const activateEditModeCommonStatus = () => {
    setEditModeCommonStatus(true);
  };

  const deactivateEditModeCommonStatus = () => {
    setEditModeCommonStatus(false);
    props.updateUserStatus(commonStatus);
  };

  const onCommonStatusChange = (e) => {
    const status = e.currentTarget.value;
    setCommonStatus(status.slice(0, maxLengthStatus));
  };

  useEffect(() => {
    setCommonStatus(props.status);
  }, [props.status]);

  return (
    <div className={cl.statusBlock}>
      <div className={cl.description_string}>
        <div className={cl.label}>Статус:</div>
        {props.authUserId !== props.profileUserId ? (
          <div className={cl.value}>{commonStatus || 'Статус отсутсвует'}</div>
        ) : !editModeCommonStatus ? (
          <div
            className={cl.value + ' ' + cl.pointer}
            onClick={activateEditModeCommonStatus}
          >
            {commonStatus || 'Статус отсутсвует'}
          </div>
        ) : (
          <input
            onChange={onCommonStatusChange}
            className={cl.input}
            autoFocus={true}
            onBlur={deactivateEditModeCommonStatus}
            value={commonStatus}
          ></input>
        )}
      </div>
      <div className={cl.description_string}>
        <div className={cl.label}>О поиске работы:</div>
        {!editModeJobStatus ? (
          <div className={cl.value}>
            {props.profile.lookingForAJobDescription}
          </div>
        ) : (
          <input
            className={cl.input}
            autoFocus={true}
            value={props.profile.lookingForAJobDescription}
          ></input>
        )}
      </div>
    </div>
  );
};

export default ProfileStatusWithHooks;
