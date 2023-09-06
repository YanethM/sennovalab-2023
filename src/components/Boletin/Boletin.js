import React from 'react';


class Boletin extends React.Component {
  render() {
    return (
      <div>
        <iframe
          title="Visor de PDF"
          src="Comunicaciones.pdf" // Reemplaza con la ruta de tu archivo PDF
          width="100%"
          height="500px" // Puedes ajustar la altura según tus necesidades
        ></iframe>
      </div>
    );
  }
}

export default Boletin;