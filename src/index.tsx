import React from 'react';
import { createRoot } from 'react-dom/client';
import { InfoComponent } from './InfoComponent';

const root = createRoot(document.getElementById('root'));
const msg : string = "¡Hola Mundo! Bienvendio a React con Webpack";
root.render(
  <div>
    <h1 className='title'>{msg}</h1>
    <InfoComponent />
  </div>
);