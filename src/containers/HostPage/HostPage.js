import React from 'react';
import styles from './HostPage.css';
import QRCode from 'qrcode.react';

function HostPage(props) {
  
  return (
    <div className={styles.normal} >
      Hello, HostPage
      <div>
        <QRCode value='https://github.com/' />
      </div>
      
    </div>
  );
}

export default HostPage;
