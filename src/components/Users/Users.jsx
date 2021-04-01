import cl from './Users.module.css';
import userPhoto from '../../assets/images/1.png';

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (
    <div className={`${cl.users} ${'block'}`}>
      <div>
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
          .slice(0, 10)}
      </div>
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
              {/*<div>{user.location.country}</div>
            <div>{user.location.city}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
