import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
  getUserProfile,
  getUserStatus,
  setUserStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

const ProfileContainer = ({
  authorizedUserId,
  profile,
  authUserId,
  status,
  setUserStatus,
  savePhoto,
  match,
  getUserProfile,
  saveProfile,
  isFetchingStatus,
  isFetching,
  history,
}) => {
  useEffect(() => {
    let userId = match.params.userId;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        history.push('/login');
      }
    }
    getUserProfile(userId);
  }, [authorizedUserId, getUserProfile, history, match.params.userId]);

  return (
    <Profile
      profile={profile}
      authUserId={authUserId}
      status={status}
      setUserStatus={setUserStatus}
      savePhoto={savePhoto}
      saveProfile={saveProfile}
      isFetching={isFetching}
      isFetchingStatus={isFetchingStatus}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isFetching: state.profilePage.isFetching,
  status: state.profilePage.status,
  isFetchingStatus: state.profilePage.isFetchingStatus,
  isFetchingProfileInfo: state.profilePage.isFetchingProfileInfo,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setUserStatus,
    getUserProfile,
    getUserStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
)(ProfileContainer);
