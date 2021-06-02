import React, { useEffect } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { toggleIsFriends, requestUsers } from '../../redux/users-reducer';
import {
  getIsFetching,
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
    />
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    isFetching: getIsFetching(state),
    isFriends: getIsFriends(state),
    currentPageFriends: getCurrentPageFriends(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
  };
};

export default connect(mapStateToProps, {
  requestUsers,
  toggleIsFriends,
})(UsersContainer);
