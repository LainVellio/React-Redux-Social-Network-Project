import cl from './Users.module.css';
import userPhoto from '../../assets/images/1.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (
    <div className={`${'block'}`}>
      <div>
        <button
          className={`${cl.numberPage}`}
          onClick={() => {
            props.onShiftPagesLeft();
          }}
        >
          {'< '}
        </button>
        {pages
          .map((page) => (
            <span
              className={`${props.currentPage === page && cl.selectedPage} ${
                cl.numberPage
              }`}
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {'  '}
              {page}
            </span>
          ))
          .slice(props.beginPage, props.endPage)}
        <button
          className={`${cl.numberPage}`}
          onClick={() => {
            props.onShiftPagesRight();
          }}
        >
          {' >'}
        </button>
      </div>
      {props.isFetching ? (
        <Preloader />
      ) : (
        props.users.map((user) => (
          <div className={`${cl.user} ${'block'}`} key={user.id}>
            <div className={cl.leftBlock}>
              <div>
                <NavLink to={'/profile/' + user.id}>
                  <img
                    className={cl.avatar}
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt="ava"
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    className={`${cl.button} ${cl.follow}`}
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': 'cf519c2f-0be6-47b0-9d84-07de5d7e28d2',
                            },
                          },
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(user.id);
                          }
                        });
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    className={`${cl.button} ${cl.unfollow}`}
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': 'cf519c2f-0be6-47b0-9d84-07de5d7e28d2',
                            },
                          },
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(user.id);
                          }
                        });
                    }}
                  >
                    UnFollow
                  </button>
                )}
              </div>
            </div>
            <div className={cl.rightBlock}>
              <div className={cl.name}>{user.name}</div>
              <div className={cl.status}>{user.status}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
