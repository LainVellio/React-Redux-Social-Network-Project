import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/Preloader/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.users.map((dialog) => (
    <DialogItem
      name={dialog.name}
      key={dialog.id}
      id={dialog.id}
      avatar={dialog.avatar}
    />
  ));

  const messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} name={message.name} />
  ));

  if (!props.isAuth) return <Redirect to={'/login'} />;

  const maxLength100 = maxLengthCreator(100);

  const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          className={cl.textarea}
          name="newMessageBody"
          component={Textarea}
          validate={[required, maxLength100]}
        />
        <button className={cl.sendButton}>Send</button>
      </form>
    );
  };

  const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(
    AddMessageForm,
  );

  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody);
  };

  return (
    <div className={cl.dialogs}>
      <div>
        <div className={`${cl.dialog_items} ${'block'}`}>{dialogsElements}</div>
      </div>
      <div>
        <div className={`${cl.messages} ${'block'}`}>
          {messagesElements}

          <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
