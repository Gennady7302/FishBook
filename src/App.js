import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { compose } from "redux";
import {withRouter} from 'react-router-dom';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

 //import DialogsContainer from './components/Dialogs/DialogsContainer';
 //import ProfileContainer from './components/Profile/ProfileContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));





class App extends React.Component {

  componentDidMount() {        
    this.props.initializeApp();
}

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs'
            render={withSuspense(DialogsContainer)} />
          <Route path='/profile/:userId?'
            render={withSuspense(ProfileContainer)} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <LoginPage />} />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);
