import React from 'react';
import './App.css';
import { Application } from './App.styles';
import PersistentDrawerRight from './menu-drawer/menu-drawer.component';

const App = () => {

  return (
    <Application >
      <PersistentDrawerRight />
    </Application>
  );
};

export default App;