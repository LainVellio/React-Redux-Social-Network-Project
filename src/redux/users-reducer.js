const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SHIFT_PAGES_LEFT = 'SHIFT_PAGES_LEFT';
const SHIFT_PAGES_RIGHT = 'SHIFT_PAGES_RIGHT';

const initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  beginPage: 0,
  endPage: 10,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case SHIFT_PAGES_LEFT: {
      return { ...state, beginPage: action.beginPage, endPage: action.endPage };
    }
    case SHIFT_PAGES_RIGHT: {
      return { ...state, beginPage: action.beginPage, endPage: action.endPage };
    }

    default:
      return state;
  }
};

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const follow = (userId) => ({ type: FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
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

export default usersReducer;
