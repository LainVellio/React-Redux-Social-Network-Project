import cl from './DescriptionString.module.css';

const DescriptionString = ({ label, value, link }) => {
  return (
    <div className={!value ? cl.display_none : cl.description_string}>
      <span className={cl.label}>{label}</span>
      {link ? <a href={value}>{value}</a> : <span>{value}</span>}
    </div>
  );
};

export default DescriptionString;
