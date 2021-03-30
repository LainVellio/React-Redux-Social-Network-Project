import cl from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers({
      users: [
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
        },
      ],
    });
  }

  return (
    <div className={`${cl.users} ${'block'}`}>
      {props.users.map((user) => (
        <div className={`${cl.user} ${'block'}`} key={user.id}>
          <span>
            <div>
              <img className={cl.avatar} src={user.avatar} alt="ava" />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  UnFollow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
