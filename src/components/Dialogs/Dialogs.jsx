import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { useEffect, useRef, useState } from 'react';

const Dialogs = ({
  dialogs,
  isAuth,
  sendMessage,
  friends,
  requestFriends,
  addNextFriendsPage,
  selectedUserId,
  setSelectedUserId,
  totalCountFriends,
  pageSize,
  pageFriends,
  setPageFriends,
}) => {
  const [isDialogsHidden, setIsDialogsHidden] = useState(true);
  const divRef = useRef(null);

  const totalCountPageFriends = Math.ceil(totalCountFriends / pageSize);

  useEffect(() => {
    requestFriends(1, (pageFriends - 1) * pageSize);
  }, [pageFriends, pageSize, requestFriends]);

  const dialogsElements = friends.map((friend) => (
    <DialogItem
      name={friend.name}
      key={friend.id}
      id={friend.id}
      avatar={friend.photos.small}
      setSelectedUserId={setSelectedUserId}
    />
  ));
  useEffect(() => {
    friends.length === 0 ? setIsDialogsHidden(true) : setIsDialogsHidden(false);
  }, [friends.length]);

  const dialog = dialogs.find((i) => i.userId === selectedUserId);
  const messagesElements = dialog
    ? dialog.messages.map((message) => (
        <Message message={message.message} key={message.id} />
      ))
    : [];
  useEffect(() => {
    divRef.current.scrollIntoView();
  }, [messagesElements.length]);

  if (!isAuth) return <Redirect to={'/login'} />;

  const maxLength100 = maxLengthCreator(100);

  const AddMessageForm = ({ handleSubmit }) => {
    return (
      <form className={cl.form} onSubmit={handleSubmit}>
        <Field
          className={cl.textarea}
          name="newMessageBody"
          component={Textarea}
          validate={[required, maxLength100]}
        />
        <div>
          <button className={cl.sendButton}>Send</button>
        </div>
      </form>
    );
  };

  const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(
    AddMessageForm,
  );

  const addNewMessage = (formData) => {
    sendMessage(selectedUserId, formData.newMessageBody);
  };

  const onShowMoreFriends = () => {
    addNextFriendsPage(pageFriends, pageSize);
    setPageFriends(pageFriends + 1);
  };

  return (
    <div className={isDialogsHidden ? cl.dialogsHidden : cl.dialogs}>
      {selectedUserId && <Redirect to={`/dialogs/${selectedUserId}`} />}
      <div>
        <div className={`${cl.dialog_items} ${'block'}`}>
          {dialogsElements}
          {totalCountPageFriends >= pageFriends && (
            <button className={cl.showMoreButton} onClick={onShowMoreFriends}>
              Show more friends
            </button>
          )}
        </div>
      </div>
      <div>
        <div
          className={
            selectedUserId ? `${cl.messages} ${'block'}` : cl.messagesNone
          }
        >
          <div className={cl.messagesElements}>
            {messagesElements}
            <div ref={divRef} style={{ float: 'left', clear: 'both' }}></div>
          </div>
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
