import React from 'react';

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

        <Header />
        <SideBar />
        <DropZone />
        <Logo />



      </div>

    </Provider>
    
  );
}

export default App;
