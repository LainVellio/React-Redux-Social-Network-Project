import Pagination from './Pagination';
import { setCurrentPage, shiftPages } from '../../../redux/pagination-reducer';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const PaginationContainer = ({
  nameOfElements,
  pageSize,
  requestFunction,
  setCurrentPage,
  shiftPages,
  state,
  isFetching,
}) => {
  const { beginPage, endPage, totalCount, currentPage } = state[nameOfElements];

  const totalCountPage = Math.ceil(totalCount / pageSize);

  useEffect(() => {
    requestFunction(currentPage, pageSize);
  }, [currentPage, pageSize, requestFunction]);

  const onPageChanged = (pageNumber) => {
    setCurrentPage(nameOfElements, pageNumber);
  };

  const onShiftPagesLeft = () => {
    if (currentPage !== 1) {
      onPageChanged(currentPage - 1);
      if (beginPage !== 0) {
        shiftPages(nameOfElements, beginPage - 1, endPage - 1);
      }
    }
  };

  const onShiftPagesRight = () => {
    if (currentPage !== totalCountPage) {
      onPageChanged(currentPage + 1);
      if (endPage < totalCountPage) {
        shiftPages(nameOfElements, beginPage + 1, endPage + 1);
      }
    }
  };

  const pages = [];
  for (let i = 1; i <= totalCountPage; i += 1) {
    pages.push(i);
  }

  return (
    <div>
      {' '}
      {!isFetching && (
        <Pagination
          onShiftPagesLeft={onShiftPagesLeft}
          onShiftPagesRight={onShiftPagesRight}
          onPageChanged={onPageChanged}
          pages={pages}
          currentPage={currentPage}
          beginPage={beginPage}
          endPage={endPage}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.pagination,
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  shiftPages,
})(PaginationContainer);
