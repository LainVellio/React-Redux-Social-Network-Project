import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestSidebarFriends } from '../../redux/users-reducer';
import { getUserProfile } from '../../redux/profile-reducer';
import Sidebar from './Sidebar';

const SidebarContainer = ({
  sidebarSize,
  sidebarFriends,
  getUserProfile,
  requestSidebarFriends,
  isAuth,
}) => {
  useEffect(() => {
    requestSidebarFriends(1, sidebarSize);
  }, [sidebarFriends.length, requestSidebarFriends, sidebarSize, isAuth]);

  return <Sidebar friends={sidebarFriends} getUserProfile={getUserProfile} />;
};

const mapStateToProps = (state) => {
  return {
    sidebarFriends: state.usersPage.sidebarFriends,
    sidebarSize: state.usersPage.sidebarSize,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  requestSidebarFriends,
  getUserProfile,
})(SidebarContainer);
