import cl from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import PaginationContainer from './Pagination/PaginationContainer';
import User from './User';

const Users = ({
  users,
  onAllUsers,
  onShowFriends,
  isFetching,
  followingInProgress,
  isFriends,
  follow,
  unfollow,
}) => {
  return (
    <div className={`${'block'}`}>
      <PaginationContainer />
      {isFetching ? (
        <Preloader />
      ) : (
        users.map((user) => (
          <User
            key={user.id}
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        ))
      )}
      <div className={cl.friendButton}>
        {isFriends ? (
          <button className={cl.allUsersButton} onClick={onAllUsers}>
            All Users
          </button>
        ) : (
          <button className={cl.showFriends} onClick={onShowFriends}>
            Show Friends
          </button>
        )}
      </div>
    </div>
  );
};

export default Users;
