import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login, logout } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
import st from '../common/FormsControls/FormsControls.module.css';

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
      <div className={st.checkbox}>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={Input} />
        </div>
        <label htmlFor="rememberMe">remember me</label>
      </div>
      {props.error && (
        <div>
          <div className={st.formSummeryError}>{props.error}</div>
        </div>
      )}
      <button className={st.loginBtn}>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to={'/profile/' + props.userId} />;
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
  userId: state.auth.userId,
});

export default connect(mapStateToProps, { login, logout })(Login);
