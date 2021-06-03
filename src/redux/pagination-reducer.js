const SET_CURRENT_PAGE = 'pagination/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'pagination/SET_TOTAL_COUNT';
const SHIFT_PAGES = 'pagination/SHIFT_PAGES';

const initialState = {
  users: {
    beginPage: 0,
    endPage: 12,
    totalCount: 0,
    currentPage: 1,
  },
  friends: {
    beginPage: 0,
    endPage: 12,
    totalCount: 0,
    currentPage: 1,
  },
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
    case SET_TOTAL_COUNT:
    case SHIFT_PAGES:
      return {
        ...state,
        [action.nameOfElements]: {
          ...state[action.nameOfElements],
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export const setCurrentPage = (nameOfElements, currentPage) => ({
  type: SET_CURRENT_PAGE,
  nameOfElements,
  payload: { currentPage },
});
export const setTotalsCount = (nameOfElements, totalCount) => ({
  type: SET_TOTAL_COUNT,
  nameOfElements,
  payload: { totalCount },
});
export const shiftPages = (nameOfElements, beginPage, endPage) => ({
  type: SHIFT_PAGES,
  nameOfElements,
  payload: { beginPage, endPage },
});

export default paginationReducer;
