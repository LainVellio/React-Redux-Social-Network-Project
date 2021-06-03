import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestFriends } from '../../redux/users-reducer';
import { getUserProfile } from '../../redux/profile-reducer';
import Sidebar from './Sidebar';
import { setIsSidebarHidden } from '../../redux/app-reducer';

const SidebarContainer = ({
  sidebarSize,
  friends,
  getUserProfile,
  requestFriends,
  isSidebarHidden,
  setIsSidebarHidden,
}) => {
  useEffect(() => {
    requestFriends(1, sidebarSize);
    friends.length !== 0 && setIsSidebarHidden(false);
  }, [friends.length, requestFriends, setIsSidebarHidden, sidebarSize]);

  return (
    <Sidebar
      friends={friends}
      getUserProfile={getUserProfile}
      isSidebarHidden={isSidebarHidden}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.usersPage.friends,
    sidebarSize: state.usersPage.sidebarSize,
    isSidebarHidden: state.app.isSidebarHidden,
  };
};

export default connect(mapStateToProps, {
  requestFriends,
  getUserProfile,
  setIsSidebarHidden,
})(SidebarContainer);
