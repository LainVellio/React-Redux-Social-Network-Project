import st from './ErrorMessage.module.css';

const ErrorMessage = ({ globalError, setGlobalError }) => {
  const clearError = () => {
    setGlobalError();
  };
  return (
    <div className={st.errorBlock}>
      <div className={st.mainMessage}>{globalError.mainMessage}</div>
      <div className={st.errorMessage}>({globalError.errorMessage})</div>
      <button className={st.button} onClick={clearError}>
        Ок
      </button>
    </div>
  );
};
export default ErrorMessage;
