import cl from '../Dialogs.module.css';

const Message = (props) => {
  return (
    <div
      className={props.name === 'Dmitry' ? cl.message_mine : cl.message_foreign}
    >
      <span>{props.message}</span>
    </div>
  );
};

export default Message;
