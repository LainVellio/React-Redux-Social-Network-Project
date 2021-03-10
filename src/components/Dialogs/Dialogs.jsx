import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElement = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialog_items}>{dialogsElements}</div>
      <div className={cl.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
