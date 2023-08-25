import React from 'react';
import GenImageForm from '../components/Main/GenImageForm';

import styles from '../styles/generate.module.css';

function generate() {
  return (
    <div className={`${styles.Cont}`}>
      <GenImageForm />
    </div>
  );
}

export default generate;
