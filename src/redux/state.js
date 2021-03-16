const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 15 },
    ],
  },

  dialogsPage: {
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'I am fine' },
    ],
    dialogs: [
      { id: 1, name: 'Dmitry' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Sergey' },
      { id: 4, name: 'Pavel' },
      { id: 5, name: 'Vadim' },
    ],
  },

  sidebar: {},
};

export default state;
