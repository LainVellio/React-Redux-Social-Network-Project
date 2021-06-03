import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SET_GLOBAL_ERROR_SUCCESS = 'SET_GLOBAL_ERROR_SUCCESS';
const SET_IS_SIDEBAR_HIDDEN = 'SET_IS_SIDEBAR_HIDDEN';

const initialState = {
  initialized: false,
  globalError: {
    mainMessage: '',
    errorMessage: '',
  },
  isSidebarHidden: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    case SET_GLOBAL_ERROR_SUCCESS:
      return {
        ...state,
        globalError: {
          mainMessage: action.mainMessage,
          errorMessage: action.errorMessage,
        },
      };
    case SET_IS_SIDEBAR_HIDDEN:
      return {
        ...state,
        isSidebarHidden: action.isSidebarHidden,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
export const setGlobalErrorSuccess = (mainMessage, errorMessage) => ({
  type: SET_GLOBAL_ERROR_SUCCESS,
  mainMessage,
  errorMessage,
});
export const setIsSidebarHidden = (isSidebarHidden) => ({
  type: SET_IS_SIDEBAR_HIDDEN,
  isSidebarHidden,
});

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

export const setGlobalError = (error) => (dispatch) => {
  const createMainMessageError = (errorStatus) => {
    switch (errorStatus) {
      case 403:
        return 'Код 403 - Ошибка доступа';
      case 500:
        return 'Код 500 - Ошибка сервера';
      default:
        return 'Неизвестная ошибка';
    }
  };
  if (!error) {
    dispatch(setGlobalErrorSuccess('', ''));
  } else
    dispatch(
      setGlobalErrorSuccess(
        createMainMessageError(error.response.status),
        error.message,
      ),
    );
};

export default appReducer;
