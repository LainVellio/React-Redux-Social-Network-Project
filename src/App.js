import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />

      <div className="app-wrapper">
        <div>
          <Navbar />
          <Sidebar users={props.state.users} />
        </div>
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              store={props.store}
              users={props.state.users}
              dispatch={props.dispatch}
            />
          )}
        />

        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              users={props.state.users}
              dispatch={props.dispatch}
            />
          )}
        />

        <Route path="/news" component={News} />

        <Route path="/music" component={Music} />

        <Route path="/settings" component={Settings} />
      </div>
    </BrowserRouter>
  );
};

export default App;
