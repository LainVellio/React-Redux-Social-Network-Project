import {
  sendMessageCreator,
  updateNewMessageBodyCreater,
} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  debugger;
  return { dialogsPage: state.dialogsPage };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreater(body));
    },
    sendMessage: () => dispatch(sendMessageCreator()),
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
