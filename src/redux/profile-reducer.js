import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/api';
import { setGlobalError } from './app-reducer';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const INITIALIZED_SUCCESS_PROFILE = 'INITIALIZED_SUCCESS_PROFILE';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const TOGGLE_IS_FETCHING_STATUS = 'TOGGLE_IS_FETCHING_STATUS';
const TOGGLE_IS_FETCHING_PROFILE_INFO = 'TOGGLE_IS_FETCHING_PROFILE_INFO';

const initialState = {
  posts: [],
  profile: null,
  isFetching: false,
  isFetchingStatus: false,
  isFetchingProfileInfo: false,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          {
            idUserPage: action.idUserPage,
            message: action.message,
            name: action.name,
            likesCount: action.likesCount,
          },
          ...state.posts,
        ],
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_USER_STATUS:
      return { ...state, status: action.status };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FETCHING_STATUS:
      return { ...state, isFetchingStatus: action.isFetchingStatus };
    case TOGGLE_IS_FETCHING_PROFILE_INFO:
      return { ...state, isFetchingProfileInfo: action.isFetchingProfileInfo };

    case INITIALIZED_SUCCESS_PROFILE:
      return {
        ...state,
        initialized: true,
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const addPostCreator = (idUserPage, message, name, likesCount) => ({
  type: ADD_POST,
  idUserPage,
  message,
  name,
  likesCount,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatusSuccess = (status) => ({
  type: SET_USER_STATUS,
  status,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFetchingStatus = (isFetchingStatus) => ({
  type: TOGGLE_IS_FETCHING_STATUS,
  isFetchingStatus,
});
export const toggleIsFetchingProfileInfo = (isFetchingProfileInfo) => ({
  type: TOGGLE_IS_FETCHING_PROFILE_INFO,
  isFetchingProfileInfo,
});
export const initializedSuccessProfile = () => ({
  type: INITIALIZED_SUCCESS_PROFILE,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const addPost = (idUserPage, message, name, likesCount = 0) => (
  dispatch,
) => {
  dispatch(addPostCreator(idUserPage, message, name, likesCount));
};

export const savePhoto = (file) => async (dispatch) => {
  try {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  } catch (error) {
    dispatch(setGlobalError(error));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  try {
    dispatch(toggleIsFetchingProfileInfo(true));
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      await dispatch(getUserProfile(userId));
    } else {
      const messages = response.data.messages
        .map((i) => {
          const field = i.match(/(?<=\()(.*?)(?=\))/)[0];
          const newField = field[0].toLowerCase() + field.slice(1);
          const error = i.match(/(.*?)(?=\()/)[0];
          return { [newField]: error };
        })
        .reduce(
          (a, i) => {
            const field = Object.keys(i)[0];
            if (field.search('contacts') !== -1) {
              const contact = field.match(/(?<=>)(.*?)(?=$)/)[0];
              const newContact = contact[0].toLowerCase() + contact.slice(1);
              const error = Object.values(i)[0];
              return { ...a, contacts: { ...a.contacts, [newContact]: error } };
            }
            return Object.assign(a, i);
          },
          { contacts: {} },
        );
      dispatch(stopSubmit('edit-profile', messages));
      return Promise.reject(response.data.messages[0]);
    }
  } catch (error) {
    dispatch(setGlobalError(error));
  }
  dispatch(toggleIsFetchingProfileInfo(false));
};

export const getUserProfile = (userId) => async (dispatch) => {
  try {
    dispatch(toggleIsFetching(true));
    const responseStatus = await profileAPI.getStatus(userId);
    dispatch(setUserStatusSuccess(responseStatus.data));
    const responseProfile = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(responseProfile.data));
  } catch (error) {
    dispatch(setGlobalError(error));
  }
  dispatch(toggleIsFetching(false));
};

export const getUserStatus = (userId) => async (dispatch) => {
  try {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatusSuccess(response.data));
  } catch (error) {
    dispatch(setGlobalError(error));
  }
};

export const setUserStatus = (status) => async (dispatch) => {
  try {
    dispatch(toggleIsFetchingStatus(true));
    const response = await profileAPI.setStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setUserStatusSuccess(status));
    }
  } catch (error) {
    dispatch(setGlobalError(error));
  }
  dispatch(toggleIsFetchingStatus(false));
};

export default profileReducer;
