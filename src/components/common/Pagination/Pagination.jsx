import cl from './Pagination.module.css';

const Pagination = ({
  onShiftPagesLeft,
  onShiftPagesRight,
  onPageChanged,
  pages,
  currentPage,
  beginPage,
  endPage,
}) => {
  return (
    <div className={cl.scrollPages}>
      <button
        className={`${cl.numberPage}`}
        onClick={() => {
          onShiftPagesLeft();
        }}
      >
        {'< '}
      </button>
      {pages
        .map((page) => (
          <span
            key={page}
            className={`${currentPage === page && cl.selectedPage} ${
              cl.numberPage
            }`}
            onClick={() => {
              onPageChanged(page);
            }}
          >
            {'  '}
            {page}
          </span>
        ))
        .slice(beginPage, endPage)}
      <button
        className={`${cl.numberPage}`}
        onClick={() => {
          onShiftPagesRight();
        }}
      >
        {' >'}
      </button>
    </div>
  );
};

export default Pagination;
