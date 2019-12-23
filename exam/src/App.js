import React from 'react';
import './App.css';
import styles from './App.css'
import ManageCities from './components/ManageCities'
import Main from './components/Main'

import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
        <HashRouter>
          <Route path='/manageCities'>
            <ManageCities />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
        </HashRouter>
    </div>
  );
}

export default App;
