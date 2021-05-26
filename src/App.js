import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { initializeApp, setGlobalError } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ErrorMessage from './components/common/ErrorMessage/ErrorMessage';
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer'),
);
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer'),
);

class App extends React.Component {
  catchAllUnhandledErrors = (promise) => {
    console.log('Необработанная ошибка', promise.reason);
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors,
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <BrowserRouter>
        <HeaderContainer />

        <div className="app-wrapper">
          {this.props.globalError.mainMessage && (
            <ErrorMessage
              globalError={this.props.globalError}
              setGlobalError={this.props.setGlobalError}
            />
          )}
          <div>
            <NavbarContainer />
            {/* <Sidebar /> */}
          </div>
          <Suspense fallback={<Preloader />}>
            <Switch>
              <Redirect exact from="/" to="/profile" />
              <Route path="/dialogs" component={DialogsContainer} />

              <Route path="/profile/:userId?" component={ProfileContainer} />

              <Route path="/news" component={News} />

              <Route path="/music" component={Music} />

              <Route path="/settings" component={Settings} />

              <Route path="/users" component={UsersContainer} />

              <Route path="/login" component={LoginPage} />
              <Route
                path="*"
                render={() => <div className="block">404 - PAGE NOT FOUND</div>}
              />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  globalError: state.app.globalError,
});

export default connect(mapStateToProps, { initializeApp, setGlobalError })(App);
