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
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialog_items}>
        <DialogItem name="Dmitry" id="1" />
        <DialogItem name="Alice" id="2" />
        <DialogItem name="Sergey" id="3" />
        <DialogItem name="Pavel" id="4" />
        <DialogItem name="Vadim" id="5" />
      </div>
      <div className={cl.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="I am fine" />
      </div>
    </div>
  );
};

export default Dialogs;
