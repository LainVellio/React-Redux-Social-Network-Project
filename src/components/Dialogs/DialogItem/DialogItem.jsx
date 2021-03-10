import { NavLink } from 'react-router-dom';
import cl from '../Dialogs.module.css';

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <div className={`${cl.dialog} ${cl.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
