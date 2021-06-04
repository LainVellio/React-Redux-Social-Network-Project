import cl from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import User from './User';
import PaginationContainer from '../common/Pagination/PaginationContainer';

const Users = ({
  users,
  friends,
  onAllUsers,
  onShowFriends,
  isFetching,
  isFriends,
  requestUsers,
  requestFriends,
}) => {
  const createPage = (array) => {
    return array.map((i) => <User key={i.id} user={i} />);
  };

  return (
    <div className={`${'block'}`}>
      {isFriends ? (
        <PaginationContainer
          nameOfElements="friends"
          pageSize={4}
          requestFunction={requestFriends}
          isFetching={isFetching}
        />
      ) : (
        <PaginationContainer
          nameOfElements="users"
          pageSize={4}
          requestFunction={requestUsers}
          isFetching={isFetching}
        />
      )}

      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          {isFriends ? createPage(friends) : createPage(users)}
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
      )}
    </div>
  );
};

export default Users;
