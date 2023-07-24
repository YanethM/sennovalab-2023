import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TeamCard.css";
import image from '../../assets/img/jpg/avatar2.jpg'


const TeamCard = () => {
  return (
    <>
      <div className="card">
          <img src={image} alt="Person" className="card__image" />
          <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
          <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
          <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
          <p className="card__line"><b> Linea de construccion </b></p>
      </div>
    </>
  );
}

export default TeamCard;