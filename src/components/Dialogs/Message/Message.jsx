import cl from '../Dialogs.module.css';

const Message = (props) => {
  return <div className={cl.message}>{props.message}</div>;
};

export default Message;
