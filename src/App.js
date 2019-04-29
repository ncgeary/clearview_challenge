import React from 'react';
import './App.css';

import {Provider} from 'react-redux';

import store from './store'

import DropZone from './components/DropZone/dropzone';
import Header from './components/Header/header';
import SideBar from './components/Sidebar/sidebar';
import Logo from './components/Logo/logo';




function App() {
  return (
    <Provider store={store}>
      < div className = "App" >
        <Logo className = "logo" />
        <Header className = "header" />
        <SideBar className="nav" />
        
        <DropZone className="main"/>
        



      </div>

    </Provider>
    
  );
}

export default App;
