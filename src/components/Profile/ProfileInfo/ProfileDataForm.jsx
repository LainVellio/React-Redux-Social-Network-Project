import cl from './ProfileInfo.module.css';
import dst from './DescriptionString/DescriptionString.module.css';
import {
  createField,
  InputProfileInfo,
} from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import st from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span className={dst.label}>ФИО</span>
        {createField('', 'fullName', [], InputProfileInfo)}
      </div>
      <div>
        <span className={dst.label}>В поисках работы</span>
        {createField('', 'lookingForAJob', [], InputProfileInfo, {
          type: 'checkbox',
        })}
      </div>
      <div>
        <span className={dst.label}>Навыки</span>
        {createField('', 'lookingForAJobDescription', [], InputProfileInfo, {})}
      </div>
      <div>
        <span className={dst.label}>О себе</span>
        {createField('', 'aboutMe', [required], InputProfileInfo, {})}
      </div>
      <div>
        <span className={dst.label}>Facebook</span>
        {createField('', 'contacts.facebook', [], InputProfileInfo, {})}
      </div>
      <div>
        <span className={dst.label}>Website</span>
        {createField('', 'contacts.website', [], InputProfileInfo, {})}
      </div>
      <div>
        <span className={dst.label}>Вконтакте</span>
        {createField('', 'contacts.vk', [], InputProfileInfo, {})}
      </div>
      <div>
        <span className={dst.label}>Twitter</span>
        {createField('', 'contacts.twitter', [], InputProfileInfo, {})}
      </div>
      <div>
        <span className={dst.label}>Instagram</span>
        {createField('', 'contacts.instagram', [], InputProfileInfo, {})}
      </div>
      <div>
        <span className={dst.label}>YouTube</span>
        {createField('', 'contacts.youtube', [], InputProfileInfo, {})}
      </div>
      <div>
        <span className={dst.label}>GitHub</span>
        {createField('', 'contacts.gitHub', [], InputProfileInfo, {})}
      </div>
      <div>
        <span className={dst.label}>MainLink</span>
        {createField('', 'contacts.mainLink', [], InputProfileInfo, {})}
      </div>

      <button className={cl.button}>Сохранить</button>
      {error && <div className={st.formSummeryError}>{error}</div>}
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm,
);

export default ProfileDataReduxForm;
