import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import userPhoto from '../../../assets/images/1.png';

const MyPosts = ({ profilePage, addPost, auth }) => {
  const profile = profilePage;

  const postElements = profile.posts
    .map((post) => (
      <Post
        name={post.name}
        key={post.id}
        message={post.message}
        likesCount={post.likesCount}
        avatar={userPhoto}
        idUserPage={post.idUserPage}
      />
    ))
    .filter((post) => post.props.idUserPage === profile.profile.userId);

  const maxLength50 = maxLengthCreator(50);

  const AddPostForm = (props) => {
    return (
      <form className={cl.form} onSubmit={props.handleSubmit}>
        <Field
          name="post"
          component={Textarea}
          validate={[required, maxLength50]}
        ></Field>
        <div>
          <button className={cl.addPost} type="submit">
            Add post
          </button>
        </div>
      </form>
    );
  };

  const AddPostReduxForm = reduxForm({ form: 'newPost' })(AddPostForm);

  const addNewPost = (formData) => {
    addPost(profile.profile.userId, formData.post, auth.login);
  };

  return (
    <div className={cl.postBlock}>
      <h3>My posts</h3>
      <AddPostReduxForm onSubmit={addNewPost} />
      <div className={cl.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
