const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
  posts: [
    {
      name: 'Dmitry',
      id: 1,
      message: 'Встречаемся сегодня в 20:00',
      likesCount: 12,
    },
    {
      name: 'Dmitry',
      id: 2,
      message: 'Всем привет! Это мой первый пост',
      likesCount: 15,
    },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [
          ...state.posts,
          {
            id: 3,
            message: state.newPostText,
            likesCount: 0,
            name: 'Dmitry',
          },
        ],
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    default:
      return state;
  }
};

export const addPost = () => ({
  type: ADD_POST,
});
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
