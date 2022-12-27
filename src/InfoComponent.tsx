import React from 'react';
import image from './img/logo_2.png';
import styles from './styles/InfoComponent.scss';

export const InfoComponent = () => {
  return (
    <main className={styles.main}>
      <img src={image} alt="logo" />
      <h1>LEMON CODE MASTER</h1>
      <div className={styles.mainText}>¡Bienvenid@s a WEBPACK!</div>
    </main>
  );
};
 