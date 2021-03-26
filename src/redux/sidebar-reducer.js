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
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sidebarReducer;
