const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

const initialState = {
  users: [
    /* 
    {
      id: 1,
      followed: true,
      fullName: 'Dmitry',
      status: 'Изучаю React',
      location: { city: 'Tula', country: 'Russia' },
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/man_male_avatar_portrait-256.png',
    },
    {
      id: 2,
      followed: true,
      fullName: 'Alice',
      status: 'Покрасила волосы в красный цвет',
      location: { city: 'Tula', country: 'Russia' },
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-128.png',
    },
    {
      id: 3,
      followed: true,
      fullName: 'Sergey',
      status: 'Играю на гитаре',
      location: { city: 'Tula', country: 'Russia' },
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_male_avatar_portrait-256.png',
    },
    {
      id: 4,
      followed: true,
      fullName: 'Pavel',
      status: 'Программирую',
      location: { city: 'Saint Petersburg', country: 'Russia' },
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-256.png',
    },
    {
      id: 5,
      followed: true,
      fullName: 'Vadim',
      status: 'Записал альбом',
      location: { city: 'Saint Petersburg', country: 'Russia' },
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/scientist_einstein_avatar_professor-256.png',
    },
    {
      id: 6,
      followed: false,
      fullName: 'Alina',
      status: 'Рисую портрет',
      location: { city: 'Moscow', country: 'Russia' },
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-256.png',
    }, */
  ],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
  endPage: 10,
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

    default:
      return state;
  }
};

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  totalUsersCount,
});

export default usersReducer;
