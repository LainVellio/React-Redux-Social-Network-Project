import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import store from './redux/redux-store';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
          <Sidebar users={store.getState().sidebar.users} />
        </div>
        <Route path="/dialogs" render={() => <DialogsContainer />} />

        <Route path="/profile" render={() => <Profile />} />

        <Route path="/news" component={News} />

        <Route path="/music" component={Music} />

        <Route path="/settings" component={Settings} />
      </div>
    </BrowserRouter>
  );
};

export default App;
