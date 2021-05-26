import React, { useEffect } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  toggleIsFriends,
  requestUsers,
} from '../../redux/users-reducer';
import {
  getIsFetching,
  getFollowingInProgress,
  getUsers,
  getIsFriends,
  getCurrentPageFriends,
  getCurrentPage,
  getPageSize,
} from '../../redux/users-selectors';

const UsersContainer = ({
  isFriends,
  currentPageFriends,
  currentPage,
  pageSize,
  users,
  isFetching,
  followingInProgress,
  follow,
  unfollow,
  requestUsers,
  toggleIsFriends,
}) => {
  useEffect(() => {
    requestUsers(
      isFriends ? currentPageFriends : currentPage,
      pageSize,
      isFriends,
    );
  }, [currentPage, currentPageFriends, isFriends, pageSize, requestUsers]);

  const onAllUsers = () => {
    toggleIsFriends(false);
  };

  const onShowFriends = () => {
    toggleIsFriends(true);
  };

  return (
    <Users
      onAllUsers={onAllUsers}
      onShowFriends={onShowFriends}
      isFriends={isFriends}
      users={users}
      isFetching={isFetching}
      followingInProgress={followingInProgress}
      follow={follow}
      unfollow={unfollow}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isFriends: getIsFriends(state),
    currentPageFriends: getCurrentPageFriends(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
  };
};

export default connect(mapStateToProps, {
  requestUsers,
  follow,
  unfollow,
  toggleIsFriends,
})(UsersContainer);
