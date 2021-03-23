import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsElements = props.users.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  const messagesElement = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} name={message.name} />
  ));

  const newMessageElement = React.createRef();

  const sendMessage = () => {
    props.sendMessage();
  };

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={cl.dialogs}>
      <div>
        <div className={`${cl.dialog_items} ${'block'}`}>{dialogsElements}</div>
      </div>
      <div>
        <div className={`${cl.messages} ${'block'}`}>
          {messagesElement}
          <textarea
            className={cl.textarea}
            ref={newMessageElement}
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageText}
          />
          <button className={cl.sendButton} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
