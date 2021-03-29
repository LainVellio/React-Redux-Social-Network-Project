import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreater,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  const state = props.store.getState();

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const updateNewMessageBody = (body) => {
    const action = updateNewMessageBodyActionCreater(body);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      dialogsPage={state.dialogsPage}
      updateNewMessageBody={updateNewMessageBody}
      sendMessage={sendMessage}
    />
  );
};

export default DialogsContainer;
