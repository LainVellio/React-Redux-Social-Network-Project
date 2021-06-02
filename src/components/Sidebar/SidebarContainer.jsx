import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestFriends } from '../../redux/users-reducer';
import { getUserProfile } from '../../redux/profile-reducer';
import Sidebar from './Sidebar';

const SidebarContainer = ({
  sidebarSize,
  friends,
  getUserProfile,
  requestFriends,
}) => {
  useEffect(() => {
    requestFriends(1, sidebarSize);
  }, [friends.length, requestFriends, sidebarSize]);

  return <Sidebar friends={friends} getUserProfile={getUserProfile} />;
};

const mapStateToProps = (state) => {
  return {
    friends: state.usersPage.friends,
    sidebarSize: state.usersPage.sidebarSize,
  };
};

export default connect(mapStateToProps, { requestFriends, getUserProfile })(
  SidebarContainer,
);
