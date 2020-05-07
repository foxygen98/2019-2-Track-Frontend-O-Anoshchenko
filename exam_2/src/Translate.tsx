import React from 'react';
import styles from './Translate.module.css'
import TextWindow from './TextWindow'

function Translate() {
    return (
      <div className={styles.TranslateBlock}>
        <TextWindow />
      </div>
    );
  }
  
export default Translate;