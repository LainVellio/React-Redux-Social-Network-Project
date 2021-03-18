import SidebarFriend from './Friend/SidebarFriend';
import cl from './Sidebar.module.css';

const Sidebar = (props) => {
  const sidebarElements = props.users.map((user) => (
    <SidebarFriend name={user.name} avatar={user.avatar} />
  ));
  return <div className={`${cl.sidebar} ${'block'}`}>{sidebarElements}</div>;
};

export default Sidebar;
