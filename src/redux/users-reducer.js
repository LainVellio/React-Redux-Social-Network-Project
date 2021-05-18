import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SHIFT_PAGES_LEFT = 'SHIFT_PAGES_LEFT';
const SHIFT_PAGES_RIGHT = 'SHIFT_PAGES_RIGHT';
const TOGGLE_IS_FRIENDS = 'TOGGLE_IS_FRIENDS';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE_FRIENDS = 'SET_CURRENT_PAGE_FRIENDS';

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
  dispatch(toggleIsFetching(true));
  const response = await usersAPI.getUsers(page, pageSize, isFriends);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
  dispatch(setTotalUsersCount(response.data.totalCount));
};

export const requestFriends = (page, pageSize) => async (dispatch) => {
  const response = await usersAPI.getUsers(page, pageSize, true);
  dispatch(setFriends(response.data.items));
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator,
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false.userId));
};

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    followSuccess,
  );
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    unfollowSuccess,
  );
};

export default usersReducer;
