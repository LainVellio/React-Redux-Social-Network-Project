import Pagination from './Pagination';
import {
  requestUsers,
  setCurrentPage,
  setCurrentPageFriends,
  shiftPagesLeft,
  shiftPagesRight,
} from '../../../redux/users-reducer';
import { connect } from 'react-redux';
import {
  getBeginPage,
  getCurrentPage,
  getCurrentPageFriends,
  getEndPage,
  getFollowingInProgress,
  getIsFetching,
  getIsFriends,
  getPageSize,
  getTotalUsersCount,
} from '../../../redux/users-selectors';

const PaginationContainer = ({
  totalUsersCount,
  pageSize,
  currentPage,
  isFriends,
  beginPage,
  endPage,
  currentPageFriends,
  requestUsers,
  setCurrentPage,
  setCurrentPageFriends,
  shiftPagesLeft,
  shiftPagesRight,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const onPageChanged = (pageNumber) => {
    requestUsers(pageNumber, pageSize, isFriends);
    isFriends ? setCurrentPageFriends(pageNumber) : setCurrentPage(pageNumber);
  };

  const onShiftPagesLeft = () => {
    if (currentPage !== 1) {
      onPageChanged(currentPage - 1);
      if (beginPage !== 0) {
        shiftPagesLeft(beginPage - 1, endPage - 1);
      }
    }
  };

  const onShiftPagesRight = () => {
    const totalUsersPage = Math.ceil(totalUsersCount / pageSize);
    if (currentPage !== totalUsersPage) {
      onPageChanged(currentPage + 1);
      if (endPage !== totalUsersPage) {
        shiftPagesRight(beginPage + 1, endPage + 1);
      }
    }
  };

  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (
    <Pagination
      onShiftPagesLeft={onShiftPagesLeft}
      onShiftPagesRight={onShiftPagesRight}
      onPageChanged={onPageChanged}
      pages={pages}
      isFriends={isFriends}
      currentPageFriends={currentPageFriends}
      currentPage={currentPage}
      beginPage={beginPage}
      endPage={endPage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFriends: getIsFriends(state),
    isFetching: getIsFetching(state),
    beginPage: getBeginPage(state),
    endPage: getEndPage(state),
    followingInProgress: getFollowingInProgress(state),
    currentPageFriends: getCurrentPageFriends(state),
  };
};

export default connect(mapStateToProps, {
  requestUsers,
  setCurrentPage,
  setCurrentPageFriends,
  shiftPagesLeft,
  shiftPagesRight,
})(PaginationContainer);
