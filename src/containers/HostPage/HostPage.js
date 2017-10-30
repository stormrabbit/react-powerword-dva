import React from 'react';
import styles from './HostPage.css';

function HostPage() {
  return (
    <div className={styles.normal} >
      Hello, World!
      {
        [1,2,3,4,5,6,7,8,9].map( item => <div key={item}>{'为了部落' + item}</div>)
      }
    </div>
  );
}

export default HostPage;
