import React, { useEffect } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  toggleIsFriends,
  requestUsers,
  requestFriends,
} from '../../redux/users-reducer';
import {
  getIsFetching,
  getUsers,
  getIsFriends,
  getFriends,
} from '../../redux/users-selectors';

const UsersContainer = ({
  isFriends,
  users,
  friends,
  isFetching,
  requestUsers,
  requestFriends,
  toggleIsFriends,
}) => {
  useEffect(() => {
    isFriends ? requestFriends(1, 4) : requestUsers(1, 4);
  }, [isFriends, requestFriends, requestUsers]);

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
      friends={friends}
      isFetching={isFetching}
      requestUsers={requestUsers}
      requestFriends={requestFriends}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    friends: getFriends(state),
    isFetching: getIsFetching(state),
    isFriends: getIsFriends(state),
  };
};

export default connect(mapStateToProps, {
  requestUsers,
  requestFriends,
  toggleIsFriends,
})(UsersContainer);
