import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreater,
} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const sendMessage = () => store.dispatch(sendMessageActionCreator());

        const updateNewMessageBody = (body) => {
          const action = updateNewMessageBodyActionCreater(body);
          store.dispatch(action);
        };
        return (
          <Dialogs
            dialogsPage={state.dialogsPage}
            updateNewMessageBody={updateNewMessageBody}
            sendMessage={sendMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
