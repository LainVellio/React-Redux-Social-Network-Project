const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 5,
        message: state.newMessageBody,
        name: 'Dmitry',
      };
      state.messages.push(newMessage);
      state.newMessageBody = '';
      return state;

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageBodyActionCreater = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
