import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';
import { setGlobalError, setIsSidebarHidden } from './app-reducer';
import { getUser } from './profile-reducer';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';
const SHIFT_PAGES_LEFT = 'users/SHIFT_PAGES_LEFT';
const SHIFT_PAGES_RIGHT = 'users/SHIFT_PAGES_RIGHT';
const TOGGLE_IS_FRIENDS = 'users/TOGGLE_IS_FRIENDS';
const SET_FRIENDS = 'users/SET_FRIENDS';
const SET_CURRENT_PAGE_FRIENDS = 'users/SET_CURRENT_PAGE_FRIENDS';

const initialState = {
  users: [],
  friends: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  currentPageFriends: 1,
  beginPage: 0,
  endPage: 12,
  isFetching: false,
  isFriends: false,
  followingInProgress: [],
  sidebarSize: 5,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_CURRENT_PAGE_FRIENDS:
      return {
        ...state,
        currentPageFriends: action.currentPageFriends,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id !== action.userId)],
      };
    }

    case SHIFT_PAGES_LEFT: {
      return { ...state, beginPage: action.beginPage, endPage: action.endPage };
    }
    case SHIFT_PAGES_RIGHT: {
      return { ...state, beginPage: action.beginPage, endPage: action.endPage };
    }

    case TOGGLE_IS_FRIENDS: {
      return { ...state, isFriends: action.isFriends };
    }

    default:
      return state;
  }
};

export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setCurrentPageFriends = (currentPageFriends) => ({
  type: SET_CURRENT_PAGE_FRIENDS,
  currentPageFriends,
});

export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
export const shiftPagesLeft = (beginPage, endPage) => ({
  type: SHIFT_PAGES_LEFT,
  beginPage,
  endPage,
});
export const shiftPagesRight = (beginPage, endPage) => ({
  type: SHIFT_PAGES_RIGHT,
  beginPage,
  endPage,
});
export const toggleIsFriends = (isFriends) => ({
  type: TOGGLE_IS_FRIENDS,
  isFriends,
});

export const requestUsers = (page, pageSize, isFriends) => async (dispatch) => {
  try {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.getUsers(page, pageSize, isFriends);
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
  } catch (error) {
    dispatch(setGlobalError(error));
  }
  dispatch(toggleIsFetching(false));
};

export const requestFriends = (page, pageSize) => async (dispatch) => {
  try {
    console.log('request friends');
    const response = await usersAPI.getUsers(page, pageSize, true);
    const friends = response.data.items;
    dispatch(setFriends(friends));
    friends.length === 0 && dispatch(setIsSidebarHidden(true));
    console.log('request friends end');
  } catch (error) {
    dispatch(setGlobalError(error));
  }
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator,
  requestFriends,
  getState,
  getUser,
) => {
  try {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);
    console.log(getState());
    if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
      requestFriends(dispatch);
      await getUser(getState().profilePage.profile.fullName)(dispatch);
    }
  } catch (error) {
    dispatch(setGlobalError(error));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch, getState) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    followSuccess,
    requestFriends(1, 5),
    getState,
    getUser,
  );
};

export const unfollow = (userId) => async (dispatch, getState) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    unfollowSuccess,
    requestFriends(1, 5),
    getState,
    getUser,
  );
};

export default usersReducer;
