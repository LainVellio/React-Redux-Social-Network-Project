import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/Preloader/FormsControls/FormsControls';
import { login, logout } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Email'}
          name={'email'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          component={Input}
          type={'password'}
          validate={[required]}
        />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input} />
        remember me
      </div>
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  return (
    <div className="block">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
