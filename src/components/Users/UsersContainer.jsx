import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  setCurrentPage,
  shiftPagesRight,
  shiftPagesLeft,
  requestUsers,
  follow,
  unfollow,
  toggleIsFriends,
} from '../../redux/users-reducer';
import {
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getBeginPage,
  getEndPage,
  getUsers,
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(
      this.props.currentPage,
      this.props.pageSize,
      this.props.isFriends,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isFriends !== this.props.isFriends) {
      this.props.requestUsers(
        this.props.currentPage,
        this.props.pageSize,
        this.props.isFriends,
      );
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(
      pageNumber,
      this.props.pageSize,
      this.props.isFriends,
    );
    this.props.setCurrentPage(pageNumber);
  };

  onShiftPagesLeft = () => {
    if (this.props.currentPage !== 1) {
      this.onPageChanged(this.props.currentPage - 1);
      if (this.props.beginPage !== 0) {
        this.props.shiftPagesLeft(
          this.props.beginPage - 1,
          this.props.endPage - 1,
        );
      }
    }
  };

  onShiftPagesRight = () => {
    const totalUsersPage = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize,
    );
    if (this.props.currentPage !== totalUsersPage) {
      this.onPageChanged(this.props.currentPage + 1);
      if (this.props.endPage !== totalUsersPage) {
        this.props.shiftPagesRight(
          this.props.beginPage + 1,
          this.props.endPage + 1,
        );
      }
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
          toggleIsFriends={this.props.toggleIsFriends}
          isFriends={this.props.isFriends}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    beginPage: getBeginPage(state),
    endPage: getEndPage(state),
    isFriends: state.usersPage.isFriends,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  shiftPagesLeft,
  shiftPagesRight,
  requestUsers,
  toggleIsFriends,
})(UsersContainer);
