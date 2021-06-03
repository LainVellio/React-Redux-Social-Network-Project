export const getUsers = (state) => {
  return state.usersPage.users;
};

/* export const getUsersSuperSelector = createSelector(
  getUsers,
  getIsFetching,
  (users, isFetching) => {
    return users.filter((u) => true);
  },
); */

export const getFriends = (state) => {
  return state.usersPage.friends;
};

export const getIsFriends = (state) => {
  return state.usersPage.isFriends;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
