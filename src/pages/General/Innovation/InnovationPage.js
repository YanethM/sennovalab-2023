import React from 'react'
import Gestion from '../../../components/GestionInnovacion/Gestion';
import Informacion from '../../../components/GestionInnovacion/Informacion';
import Politica from '../../../components/GestionInnovacion/Politica';
import "./InnovationPage.css";

const InnovationPage = () => {
  return (
    <>
      <Gestion />
      <Informacion />
      <Politica />
    </>
  )
}

export default InnovationPage