import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
  toggleIsFetching,
  shiftPagesRight,
  shiftPagesLeft,
} from '../../redux/users-reducer';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  onShiftPagesLeft = () => {
    if (this.props.beginPage !== 0) {
      this.props.currentPage === this.props.endPage &&
        this.onPageChanged(this.props.currentPage - 1);

      this.props.shiftPagesLeft(
        this.props.beginPage - 1,
        this.props.endPage - 1,
      );
    }
  };

  onShiftPagesRight = () => {
    if (this.props.endPage !== this.props.totalUsersCount) {
      this.props.currentPage - 1 === this.props.beginPage &&
        this.onPageChanged(this.props.currentPage + 1);

      this.props.shiftPagesRight(
        this.props.beginPage + 1,
        this.props.endPage + 1,
      );
    }
  };

  render() {
    return (
      <>
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
          beginPage={this.props.beginPage}
          endPage={this.props.endPage}
          onShiftPagesLeft={this.onShiftPagesLeft}
          onShiftPagesRight={this.onShiftPagesRight}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    beginPage: state.usersPage.beginPage,
    endPage: state.usersPage.endPage,
  };
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};*/

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  shiftPagesLeft,
  shiftPagesRight,
})(UsersContainer);
