import React from 'react';
import { connect } from 'react-redux';
import { requestFriends } from '../../redux/users-reducer';
import { getUserProfile } from '../../redux/profile-reducer';
import cl from './Sidebar.module.css';
import userPhoto from '../../assets/images/1.png';
import { NavLink } from 'react-router-dom';

class SidebarContainer extends React.Component {
  componentDidMount() {
    this.props.requestFriends(1, this.props.sidebarSize);
  }

  render() {
    const Sidebar = (props) => {
      const sidebarElements = props.friends.map((friend) => {
        const getUserProfile = () => props.getUserProfile(friend.id);
        return (
          <NavLink to={`/profile/${friend.id}`} onClick={getUserProfile}>
            <div className={cl.sidebarFriend}>
              <img
                className={cl.avatar}
                src={friend.photos.small || userPhoto}
                alt="ava"
              />
              <div className={cl.friendName}>{friend.name}</div>
            </div>
          </NavLink>
        );
      });
      return (
        <div className={`${cl.sidebar} ${'block'}`}>{sidebarElements}</div>
      );
    };

    return (
      <Sidebar
        friends={this.props.friends}
        getUserProfile={this.props.getUserProfile}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    friends: state.usersPage.friends,
    sidebarSize: state.usersPage.sidebarSize,
  };
};

export default connect(mapStateToProps, { requestFriends, getUserProfile })(
  SidebarContainer,
);
