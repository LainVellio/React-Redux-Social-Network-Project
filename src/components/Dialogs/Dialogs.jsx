import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsElements = props.users.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  const messagesElement = props.state.messages.map((message) => (
    <Message message={message.message} name={message.name} />
  ));

  const sendMessage = React.createRef();

  const send = () => {
    const text = sendMessage.current.value;
    alert(text);
  };

  return (
    <div className={cl.dialogs}>
      <div>
        <div className={`${cl.dialog_items} ${'block'}`}>{dialogsElements}</div>
      </div>
      <div>
        <div className={`${cl.messages} ${'block'}`}>
          {messagesElement}
          <textarea className={cl.textarea} ref={sendMessage}></textarea>
          <button className={cl.sendButton} onClick={send}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
