import React from 'react';
import cl from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editModeCommonStatus: false,
    editModeJobStatus: false,
  };

  activateEditModeCommonStatus() {
    this.setState({
      editModeCommonStatus: true,
    });
  }

  deactivateEditModeCommonStatus() {
    this.setState({
      editModeCommonStatus: false,
    });
  }

  activateEditModeJobStatus() {
    this.setState({
      editModeJobStatus: true,
    });
  }

  deactivateEditModeJobStatus() {
    this.setState({
      editModeJobStatus: false,
    });
  }

  render() {
    return (
      <div className={cl.statusBlock}>
        <div className={cl.description_string}>
          <div className={cl.label}>Статус:</div>
          {!this.state.editModeCommonStatus ? (
            <div
              className={cl.value}
              onClick={this.activateEditModeCommonStatus.bind(this)}
            >
              {this.props.profile.aboutMe}
            </div>
          ) : (
            <input
              className={cl.input}
              autoFocus={true}
              onBlur={this.deactivateEditModeCommonStatus.bind(this)}
              value={this.props.profile.aboutMe}
            ></input>
          )}
        </div>
        <div className={cl.description_string}>
          <div className={cl.label}>О поиске работы:</div>
          {!this.state.editModeJobStatus ? (
            <div
              className={cl.value}
              onClick={this.activateEditModeJobStatus.bind(this)}
            >
              {this.props.profile.lookingForAJobDescription}
            </div>
          ) : (
            <input
              className={cl.input}
              autoFocus={true}
              onBlur={this.deactivateEditModeJobStatus.bind(this)}
              value={this.props.profile.lookingForAJobDescription}
            ></input>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
