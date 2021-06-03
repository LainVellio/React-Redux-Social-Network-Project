import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp, setGlobalError } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ErrorMessage from './components/common/ErrorMessage/ErrorMessage';
import SidebarContainer from './components/Sidebar/SidebarContainer';
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer'),
);
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer'),
);

const App = ({ initialized, globalError, initializeApp, setGlobalError }) => {
  useEffect(() => {
    const catchAllUnhandledErrors = (promise) => {
      setGlobalError('Необработанная ошибка', promise.reason);
    };
    initializeApp();
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return window.removeEventListener(
      'unhandledrejection',
      catchAllUnhandledErrors,
    );
  }, [initializeApp, setGlobalError]);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <HeaderContainer />

      <div className="app-wrapper">
        {globalError.mainMessage && (
          <ErrorMessage
            globalError={globalError}
            setGlobalError={setGlobalError}
          />
        )}
        <div>
          <NavbarContainer />
          <SidebarContainer />
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
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  globalError: state.app.globalError,
  friends: state.usersPage.friends,
});

export default connect(mapStateToProps, { initializeApp, setGlobalError })(App);
