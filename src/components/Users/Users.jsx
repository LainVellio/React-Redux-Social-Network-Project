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
            <span>
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
                {/*<div>{user.location.country}</div>
            <div>{user.location.city}</div> */}
              </span>
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
