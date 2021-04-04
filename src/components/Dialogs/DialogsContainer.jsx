import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage,
})(Dialogs);

export default DialogsContainer;
