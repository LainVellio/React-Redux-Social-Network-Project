import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

const store = {
  _state: {
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

    profilePage: {
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
    },

    dialogsPage: {
      messages: [
        { id: 1, message: 'Привет', name: 'Sergey' },
        { id: 2, message: 'Как дела?', name: 'Sergey' },
        {
          id: 3,
          message: 'Привет, у меня всё хорошо, а у тебя?',
          name: 'Dmitry',
        },
        { id: 4, message: 'Тоже прекрасно!', name: 'Sergey' },
        { id: 5, message: 'Когда встретимся?', name: 'Dmitry' },
      ],
      newMessageBody: '',
    },

    sidebar: {},
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
