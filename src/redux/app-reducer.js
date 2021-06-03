import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SET_GLOBAL_ERROR_SUCCESS = 'SET_GLOBAL_ERROR_SUCCESS';

const initialState = {
  initialized: false,
  globalError: {
    mainMessage: '',
    errorMessage: '',
  },
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

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

export const setGlobalError = (error) => (dispatch) => {
  const createMainMessageError = (errorStatus) => {
    switch (errorStatus) {
      case 400:
        return 'Код 400 - Неверный запрос';
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
  } else {
    const status = error.response ? error.response.status : 'Статус отсутсвует';
    dispatch(
      setGlobalErrorSuccess(createMainMessageError(status), error.message),
    );
  }
};

export default appReducer;
