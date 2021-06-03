import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow } from '../../../redux/users-reducer';
import cl from './FollowUnfollowButton.module.css';

const Button = ({ user, followingInProgress, follow, unfollow, isAuth }) => {
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
            unfollow(user.id);
          }}
        >
          Follow
        </button>
      ) : (
        <button
          disabled={followingInProgress.some((id) => id === user.id)}
          className={`${cl.button} ${cl.unfollow}`}
          onClick={() => {
            follow(user.id);
          }}
        >
          UnFollow
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

export default connect(mapStateToProps, { unfollow, follow })(Button);
