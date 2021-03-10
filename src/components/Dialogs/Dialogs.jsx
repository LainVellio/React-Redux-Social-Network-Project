import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsData = [
    { id: 1, name: 'Dmitry' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Sergey' },
    { id: 4, name: 'Pavel' },
    { id: 5, name: 'Vadim' },
  ];

  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'I am fine' },
  ];

  const messagesElement = messagesData.map((message) => (
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
