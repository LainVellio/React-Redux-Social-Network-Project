import { render } from '@testing-library/react';

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
      newMessageText: '',
    },

    sidebar: {},
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {},

  addPost() {
    const newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
      name: 'Dmitry',
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  sendMessage() {
    const newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
      name: 'Dmitry',
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;

window.store = store;
