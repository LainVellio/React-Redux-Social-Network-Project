import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  setCurrentPage,
  shiftPagesRight,
  shiftPagesLeft,
  getUsers,
  follow,
  unfollow,
} from '../../redux/users-reducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  onShiftPagesLeft = () => {
    if (this.props.beginPage !== 0) {
      this.onPageChanged(this.props.currentPage - 1);

      this.props.shiftPagesLeft(
        this.props.beginPage - 1,
        this.props.endPage - 1,
      );
    }
  };

  onShiftPagesRight = () => {
    if (this.props.endPage !== this.props.totalUsersCount) {
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
          users={this.props.users}
          isFetching={this.props.isFetching}
          beginPage={this.props.beginPage}
          endPage={this.props.endPage}
          followingInProgress={this.props.followingInProgress}
          onPageChanged={this.onPageChanged}
          onShiftPagesLeft={this.onShiftPagesLeft}
          onShiftPagesRight={this.onShiftPagesRight}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
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
    followingInProgress: state.usersPage.followingInProgress,
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
  setCurrentPage,
  shiftPagesLeft,
  shiftPagesRight,
  getUsers,
})(UsersContainer);
