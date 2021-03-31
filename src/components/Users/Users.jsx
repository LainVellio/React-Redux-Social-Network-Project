import * as axios from 'axios';
import cl from './Users.module.css';
import userPhoto from '../../assets/images/1.png';

const Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div className={`${cl.users} ${'block'}`}>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((user) => (
        <div className={`${cl.user} ${'block'}`} key={user.id}>
          <span>
            <div>
              <img
                className={cl.avatar}
                src={user.photos.small != null ? user.photos.small : userPhoto}
                alt="ava"
              />
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
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              {/*               <div>{user.location.country}</div>
              <div>{user.location.city}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
