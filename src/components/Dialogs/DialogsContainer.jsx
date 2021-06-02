import {
  sendMessage,
  setSelectedUserId,
  addNextFriendsPage,
  requestFriends,
  setPageFriends,
} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    friends: state.dialogsPage.friends,
    selectedUserId: state.dialogsPage.selectedUserId,
    totalCountFriends: state.dialogsPage.totalCountFriends,
    pageSize: state.dialogsPage.pageSize,
    pageFriends: state.dialogsPage.pageFriends,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,
    requestFriends,
    addNextFriendsPage,
    setSelectedUserId,
    setPageFriends,
  }),
  withAuthRedirect,
)(Dialogs);
