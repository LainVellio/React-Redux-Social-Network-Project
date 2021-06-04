import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setFollowed } from '../../../redux/users-reducer';
import cl from './FollowUnfollowButton.module.css';

const Button = ({ user, followingInProgress, setFollowed, isAuth }) => {
  const [isHidden, setIsisHidden] = useState(true);

  useEffect(() => {
    setIsisHidden(!isAuth);
  }, [isAuth]);

  return (
    <div className={isHidden ? cl.hidden : ''}>
      {user.followed ? (
        <button
          disabled={followingInProgress.some((id) => id === user.id)}
          className={`${cl.button} ${cl.follow}`}
          onClick={() => {
            setFollowed(user.id, false);
          }}
        >
          Remove
        </button>
      ) : (
        <button
          disabled={followingInProgress.some((id) => id === user.id)}
          className={`${cl.button} ${cl.unfollow}`}
          onClick={() => {
            setFollowed(user.id, true);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setFollowed })(Button);
