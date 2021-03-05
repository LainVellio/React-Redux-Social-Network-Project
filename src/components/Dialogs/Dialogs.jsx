import cl from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialog_items}>
        <div className={`${cl.dialog} ${cl.active}`}>Dmitry</div>
        <div className={cl.dialog}>Alice</div>
        <div className={cl.dialog}>Sergey</div>
        <div className={cl.dialog}>Pavel</div>
        <div className={cl.dialog}>Vadim</div>
      </div>
      <div className={cl.messages}>
        <div className={cl.message}>Hi</div>
        <div className={cl.message}>How are you?</div>
        <div className={cl.message}>I am fine</div>
      </div>
    </div>
  );
};

export default Dialogs;
