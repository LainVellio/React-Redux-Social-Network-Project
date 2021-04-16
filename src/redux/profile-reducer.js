import { profileAPI } from '../api/api';
import randomInteger from '../utils/randomInteger';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const INITIALIZED_SUCCESS_PROFILE = 'INITIALIZED_SUCCESS_PROFILE';

const initialState = {
  users: [
    {
      id: 1,
      name: 'Dmitry',
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/man_male_avatar_portrait-256.png',
    },
    {
      id: 2,
      name: 'Alice',
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-128.png',
    },
    {
      id: 3,
      name: 'Sergey',
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_male_avatar_portrait-256.png',
    },
    {
      id: 4,
      name: 'Pavel',
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-256.png',
    },
    {
      id: 5,
      name: 'Vadim',
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/scientist_einstein_avatar_professor-256.png',
    },
  ],
  posts: [],
  profile: null,
  isFetching: false,
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

    case INITIALIZED_SUCCESS_PROFILE:
      return {
        ...state,
        initialized: true,
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
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const initializedSuccessProfile = () => ({
  type: INITIALIZED_SUCCESS_PROFILE,
});

export const addPost = (idUserPage, message, name, likesCount = 0) => {
  likesCount === 0 && (likesCount = randomInteger(0, 20));
  return (dispatch) => {
    dispatch(addPostCreator(idUserPage, message, name, likesCount));
  };
};

export const getUserProfile = (userId) => {
  return async function (dispatch) {
    dispatch(toggleIsFetching(true));
    await profileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
    await profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(response.data));
      }
    });
  };
};

export default profileReducer;
