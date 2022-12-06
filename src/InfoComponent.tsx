import React from 'react';
import image from './img/logo_2.png';

export const InfoComponent = () => {
  return (
    <main className="main">
      <img src={image} alt="logo" />
      <h1 className="main--title">LEMON CODE MASTER</h1>
      <div className="main--text">¡Bienvenid@s a WEBPACK!</div>
    </main>
  );
};
 