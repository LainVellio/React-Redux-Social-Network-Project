import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreater,
} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
  const dialogsElements = props.users.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  const messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} name={message.name} />
  ));

  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const onMessageChange = (e) => {
    const body = e.target.value;
    props.dispatch(updateNewMessageBodyActionCreater(body));
  };

  return (
    <div className={cl.dialogs}>
      <div>
        <div className={`${cl.dialog_items} ${'block'}`}>{dialogsElements}</div>
      </div>
      <div>
        <div className={`${cl.messages} ${'block'}`}>
          {messagesElements}
          <textarea
            className={cl.textarea}
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageBody}
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
