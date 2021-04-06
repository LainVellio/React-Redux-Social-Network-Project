import cl from './Users.module.css';
import userPhoto from '../../assets/images/1.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

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
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id,
                    )}
                    className={`${cl.button} ${cl.follow}`}
                    onClick={() => {
                      props.onUnfollowUser(user.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id,
                    )}
                    className={`${cl.button} ${cl.unfollow}`}
                    onClick={() => {
                      props.onFollowUser(user.id);
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
