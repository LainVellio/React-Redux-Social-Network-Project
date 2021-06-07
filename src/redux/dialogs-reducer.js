import { usersAPI } from '../api/api';
import { setGlobalError } from './app-reducer';

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';
const SET_SELECTED_USER_ID = 'dialogs/SET_SELECTED_USER_ID';
const SET_FRIENDS = 'dialogs/SET_FRIENDS';
const ADD_NEXT_FRIENDS_PAGE_CREATOR = 'dialogs/ADD_NEXT_FRIENDS_PAGE_CREATOR';
const SET_TOTAL_COUNT_FRIENDS = 'dialogs/SET_TOTAL_COUNT_FRIENDS';
const SET_PAGE_FRIENDS = 'dialogs/SET_PAGE_FRIENDS';

const initialState = {
  dialogs: [],
  friends: [],
  selectedUserId: null,
  totalCountFriends: 0,
  pageSize: 5,
  pageFriends: 2,
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        dialogs: state.dialogs.find((i) => i.userId === action.userId)
          ? state.dialogs.map((i) => {
              if (i.userId === action.userId)
                return {
                  userId: i.userId,
                  messages: [
                    ...i.messages,
                    { id: i.messages.length, message: action.message },
                  ],
                };
              return i;
            })
          : [
              ...state.dialogs,
              {
                userId: action.userId,
                messages: [{ id: 0, message: action.message }],
              },
            ],
      };

    case SET_SELECTED_USER_ID:
    case SET_PAGE_FRIENDS:
    case SET_TOTAL_COUNT_FRIENDS:
      return {
        ...state,
        ...action.payload,
      };
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };

    case ADD_NEXT_FRIENDS_PAGE_CREATOR:
      return { ...state, friends: [...state.friends, ...action.friends] };

    default:
      return state;
  }
};

export const sendMessage = (userId, message) => ({
  type: SEND_MESSAGE,
  userId,
  message,
});
export const setSelectedUserId = (selectedUserId) => ({
  type: SET_SELECTED_USER_ID,
  payload: { selectedUserId },
});
export const setFriends = (friends) => ({
  type: SET_FRIENDS,
  friends,
});
export const addNextFriendsPageCreator = (friends) => ({
  type: ADD_NEXT_FRIENDS_PAGE_CREATOR,
  friends,
});
export const setTotalCountFriends = (totalCountFriends) => ({
  type: SET_TOTAL_COUNT_FRIENDS,
  payload: { totalCountFriends },
});
export const setPageFriends = (pageFriends) => ({
  type: SET_PAGE_FRIENDS,
  payload: { pageFriends },
});

export const requestFriends = (page, pageSize) => async (dispatch) => {
  try {
    const response = await usersAPI.getUsers(page, pageSize, true);
    const friends = response.data.items;
    dispatch(setFriends(friends));
    dispatch(setTotalCountFriends(response.data.totalCount));
  } catch (error) {
    dispatch(setGlobalError(error));
  }
};

export const addNextFriendsPage = (page, pageSize) => async (dispatch) => {
  try {
    const response = await usersAPI.getUsers(page, pageSize, true);
    dispatch(addNextFriendsPageCreator(response.data.items));
  } catch (error) {
    dispatch(setGlobalError(error));
  }
};

export default dialogsReducer;
