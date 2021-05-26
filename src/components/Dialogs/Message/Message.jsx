import cl from '../Dialogs.module.css';

const Message = ({ name, message }) => {
  return (
    <div className={name === 'Dmitry' ? cl.message_mine : cl.message_foreign}>
      <span>{message}</span>
    </div>
  );
};

export default Message;
