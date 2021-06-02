import cl from '../Dialogs.module.css';

const Message = ({ message }) => {
  return (
    <div className={cl.message_mine}>
      <span>{message}</span>
    </div>
  );
};

export default Message;
