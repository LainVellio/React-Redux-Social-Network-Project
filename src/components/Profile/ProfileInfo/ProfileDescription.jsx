import cl from './ProfileInfo.module.css';

const ProfileDescription = (props) => {
  const statuses = [
    { label: 'Статус:', value: props.profile.aboutMe },
    {
      label: 'О поиске работы:',
      value: props.profile.lookingForAJobDescription,
    },
  ];
  const contacts = [
    { label: 'Facebook:', link: props.profile.contacts.facebook },
    { label: 'Website:', link: props.profile.contacts.website },
    { label: 'Вконтакте:', link: props.profile.contacts.vk },
    { label: 'Twitter:', link: props.profile.contacts.twitter },
    { label: 'Instagram:', link: props.profile.contacts.instagram },
    { label: 'YouTube:', link: props.profile.contacts.youtube },
    { label: 'GitHub:', link: props.profile.contacts.github },
    { label: 'MainLink:', link: props.profile.contacts.mainLink },
  ];

  return (
    <div className={cl.description}>
      <div className={cl.fullName}>{props.fullName}</div>
      {statuses.map(
        (e) =>
          e.value !== null && (
            <div className={cl.description_string}>
              <span className={cl.label}>{e.label}</span>
              <span>{e.value}</span>
            </div>
          ),
      )}
      {contacts.map(
        (e) =>
          e.link !== null && (
            <div className={cl.description_string}>
              <span className={cl.label}>{e.label}</span>
              <a href={e.link}>{e.link}</a>
            </div>
          ),
      )}
    </div>
  );
};

export default ProfileDescription;
