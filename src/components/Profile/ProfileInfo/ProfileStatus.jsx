import React from 'react';
import cl from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editModeCommonStatus: false,
    commonStatus: this.props.status,
    editModeJobStatus: false,
  };

  activateEditModeCommonStatus = () => {
    this.setState({
      editModeCommonStatus: true,
    });
  };

  deactivateEditModeCommonStatus = () => {
    this.setState({
      editModeCommonStatus: false,
    });
    this.props.updateUserStatus(this.state.commonStatus);
  };

  onCommonStatusChange = (e) => {
    this.setState({ commonStatus: e.currentTarget.value });
  };

  activateEditModeJobStatus = () => {
    this.setState({
      editModeJobStatus: true,
    });
  };

  deactivateEditModeJobStatus = () => {
    this.setState({
      editModeJobStatus: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
      console.log('componentDidUpdate');
    }
  }

  render() {
    return (
      <div className={cl.statusBlock}>
        <div className={cl.description_string}>
          <div className={cl.label}>Статус:</div>
          {!this.state.editModeCommonStatus ? (
            <div
              className={cl.value}
              onClick={this.activateEditModeCommonStatus}
            >
              {this.state.commonStatus || 'Статус отсутсвует'}
            </div>
          ) : (
            <input
              onChange={this.onCommonStatusChange}
              className={cl.input}
              autoFocus={true}
              onBlur={this.deactivateEditModeCommonStatus}
              value={this.state.commonStatus}
            ></input>
          )}
        </div>
        <div className={cl.description_string}>
          <div className={cl.label}>О поиске работы:</div>
          {!this.state.editModeJobStatus ? (
            <div className={cl.value} onClick={this.activateEditModeJobStatus}>
              {this.props.profile.lookingForAJobDescription}
            </div>
          ) : (
            <input
              className={cl.input}
              autoFocus={true}
              onBlur={this.deactivateEditModeJobStatus}
              value={this.props.profile.lookingForAJobDescription}
            ></input>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
