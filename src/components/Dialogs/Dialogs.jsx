import { NavLink } from 'react-router-dom';
import cl from './Dialogs.module.css';

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <div className={`${cl.dialog} ${cl.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={cl.message}>{props.message}</div>;
};

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
