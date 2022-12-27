import React from 'react';
import { createRoot } from 'react-dom/client';
import { InfoComponent } from './InfoComponent';
import styles from  './main.scss';

const root = createRoot(document.getElementById('root'));
const msg : string = "¡Hola Mundo! Bienvendio a React con Webpack";
root.render(
  <div>
    <h1 className={styles.pageTitle}>{msg}</h1>
    <InfoComponent />
  </div>
);