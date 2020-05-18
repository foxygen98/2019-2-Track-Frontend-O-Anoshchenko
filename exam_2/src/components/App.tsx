import React from 'react';
import styles from '../styles/Translate.module.css'
import Translate from './Translate'

function App() {
  return (
    <>
      <div className={styles.header}>TechnoTrack Translate</div>
      <hr />
      <Translate />
    </>
  );
}

export default App;
