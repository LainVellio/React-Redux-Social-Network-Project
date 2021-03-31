import * as axios from 'axios';
import cl from './Users.module.css';
import userPhoto from '../../assets/images/1.png';
import React from 'react';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={`${cl.users} ${'block'}`}>
        {this.props.users.map((user) => (
          <div className={`${cl.user} ${'block'}`} key={user.id}>
            <span>
              <div>
                <img
                  className={cl.avatar}
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt="ava"
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
  }
}

export default Users;
