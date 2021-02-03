import React from 'react';
import './App.css';
import { Application } from './App.styles';
import PersistentDrawerRight from './nav/menu-drawer/menu-drawer.container';


const App = () => {

  return (
    <Application >
      <PersistentDrawerRight />
    </Application>
  );
};

export default App;