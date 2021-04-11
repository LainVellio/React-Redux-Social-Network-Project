import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import store from './redux/redux-store';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
  return (
    <BrowserRouter>
      <HeaderContainer />

      <div className="app-wrapper">
        <div>
          <Navbar />
          <Sidebar users={store.getState().sidebar.users} />
        </div>
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

        <Route path="/news" component={News} />

        <Route path="/music" component={Music} />

        <Route path="/settings" component={Settings} />

        <Route path="/users" component={UsersContainer} />

        <Route path="/login" component={LoginPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
