import cl from '../Sidebar.module.css';

const SidebarFriend = (props) => {
  return (
    <div>
      <img className={cl.avatar} src={props.avatar} alt="ava" />
      {props.name}
    </div>
  );
};

export default SidebarFriend;
