import { NavLink } from 'react-router-dom';
import cl from '../Dialogs.module.css';

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <div className={`${cl.dialog}`}>
      <NavLink to={path} activeClassName={cl.active}>
        <img src={props.avatar} alt="ava" />
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default DialogItem;
