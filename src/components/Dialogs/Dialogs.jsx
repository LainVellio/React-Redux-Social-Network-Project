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

  const messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'I am fine' },
  ];

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialog_items}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={cl.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
