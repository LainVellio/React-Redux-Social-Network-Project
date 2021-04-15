import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const state = props.profilePage;

  const post = state.posts.map((post) => {
    const user = state.users.find((item) => post.name === item.name);
    return {
      name: post.name,
      key: post.id,
      id: post.id,
      likesCount: post.likesCount,
      message: post.message,
      avatar: user.avatar,
    };
  });

  const postElements = post.map((post) => (
    <Post
      name={post.name}
      key={post.id}
      message={post.message}
      likesCount={post.likesCount}
      avatar={post.avatar}
    />
  ));

  const maxLength10 = maxLengthCreator(10);

  const AddPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            className={cl.textarea}
            name="post"
            component={Textarea}
            validate={[required, maxLength10]}
          ></Field>
        </div>
        <div>
          <button className={cl.addPost}>Add post</button>
        </div>
      </form>
    );
  };

  const AddPostReduxForm = reduxForm({ form: 'newPost' })(AddPostForm);

  const addNewPost = (formData) => {
    props.addPost(formData.post);
  };

  return (
    <div className={cl.postBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={cl.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
