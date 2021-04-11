import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

export default compose(
  connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage,
  }),
  withAuthRedirect,
)(Dialogs);
