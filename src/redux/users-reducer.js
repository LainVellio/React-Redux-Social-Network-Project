import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';
import { setGlobalError } from './app-reducer';
import { setTotalsCount } from './pagination-reducer';
import { getUser } from './profile-reducer';

const SET_FOLLOWED_SUCCESS = 'users/SET_FOLLOWED_SUCCESS';
const SET_USERS = 'users/SET_USERS';
const SET_FRIENDS = 'users/SET_FRIENDS';
const SET_SIDEBAR_FRIENDS = 'users/SET_SIDEBAR_FRIENDS';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';
const TOGGLE_IS_FRIENDS = 'users/TOGGLE_IS_FRIENDS';

const initialState = {
  users: [],
  friends: [],
  sidebarFriends: [],
  isFetching: false,
  isFriends: false,
  followingInProgress: [],
  sidebarSize: 5,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
    case SET_FRIENDS:
    case SET_SIDEBAR_FRIENDS:
    case TOGGLE_IS_FETCHING:
    case TOGGLE_IS_FRIENDS:
      return {
        ...state,
        ...action.payload,
      };

    case SET_FOLLOWED_SUCCESS:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: action.isFollow,
        }),
        friends: updateObjectInArray(state.friends, action.userId, 'id', {
          followed: action.isFollow,
        }),
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id !== action.userId)],
      };
    }

    default:
      return state;
  }
};

export const setFollowedSuccess = (userId, isFollow) => ({
  type: SET_FOLLOWED_SUCCESS,
  userId,
  isFollow,
});
export const setUsers = (users) => ({ type: SET_USERS, payload: { users } });
export const setFriends = (friends) => ({
  type: SET_FRIENDS,
  payload: { friends },
});
export const setSidebarFriends = (sidebarFriends) => ({
  type: SET_SIDEBAR_FRIENDS,
  payload: { sidebarFriends },
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: { isFetching },
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
export const toggleIsFriends = (isFriends) => ({
  type: TOGGLE_IS_FRIENDS,
  payload: { isFriends },
});

const requestUsersFlow = async (
  dispatch,
  page,
  pageSize,
  nameOfElements,
  setFunction,
  isFriends,
  isFetching,
) => {
  try {
    dispatch(toggleIsFetching(isFetching));
    const response = await usersAPI.getUsers(page, pageSize, isFriends);
    dispatch(setFunction(response.data.items));
    dispatch(setTotalsCount(nameOfElements, response.data.totalCount));
  } catch (error) {
    dispatch(setGlobalError(error));
  }
  dispatch(toggleIsFetching(false));
};
export const requestUsers = (page, pageSize) => async (dispatch) => {
  requestUsersFlow(dispatch, page, pageSize, 'users', setUsers, false, true);
};
export const requestFriends = (page, pageSize) => async (dispatch) => {
  requestUsersFlow(dispatch, page, pageSize, 'friends', setFriends, true, true);
};
export const requestSidebarFriends = (page, pageSize) => async (dispatch) => {
  requestUsersFlow(
    dispatch,
    page,
    pageSize,
    'sidebarFriends',
    setSidebarFriends,
    true,
    false,
  );
};

export const setFollowed = (userId, isFollow) => async (dispatch, getState) => {
  try {
    dispatch(toggleFollowingProgress(true, userId));
    const response = isFollow
      ? await usersAPI.follow(userId)
      : await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(setFollowedSuccess(userId, isFollow));
      requestSidebarFriends(1, 5)(dispatch);
      const profile = getState().profilePage.profile;
      profile && (await getUser(profile.fullName)(dispatch));
    }
  } catch (error) {
    dispatch(setGlobalError(error));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export default usersReducer;
