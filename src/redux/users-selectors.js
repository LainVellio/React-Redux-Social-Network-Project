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

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsFriends = (state) => {
  return state.usersPage.isFriends;
};

export const getCurrentPageFriends = (state) => {
  return state.usersPage.currentPageFriends;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};

export const getBeginPage = (state) => {
  return state.usersPage.beginPage;
};

export const getEndPage = (state) => {
  return state.usersPage.endPage;
};
