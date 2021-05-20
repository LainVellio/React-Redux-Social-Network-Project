import MiniPreloader from '../Preloader/MiniPreloader';
import cl from './DescriptionString.module.css';

const DescriptionString = ({
  label,
  isEditModeProfile,
  value,
  onChange,
  link,
  isFetchingProfileInfo,
}) => {
  return (
    <div
      className={
        !isEditModeProfile && !value ? cl.display_none : cl.description_string
      }
    >
      <span className={cl.label}>{label}</span>
      {isFetchingProfileInfo ? (
        <MiniPreloader />
      ) : isEditModeProfile ? (
        <input value={value} onChange={(e) => onChange(e.target.value)} />
      ) : link ? (
        <a href={value}>{value}</a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

export default DescriptionString;
