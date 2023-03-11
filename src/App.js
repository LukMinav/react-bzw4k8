import React from 'react';

function MiComponente(props) {
  return (
    <div>
      <h1>Mi Título</h1>
      <button onClick={() => console.log('Haz clic en el botón')}>Haz clic aquí</button>
    </div>
  );
}