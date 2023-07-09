/* rafce */import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRoutesProject from "./config/routes";

/* import Menu from './components/MenuN av/Menu';
import Const from './components/LineasS/Const';
import Ind from './components/LineasS/Ind';
import Desa from './components/LineasS/Desa';
import Nosotros from './components/About-Us/Nosotros';
import Sennovalab from './components/About-Us/Sennovalab';
import Case from './components/About-Us/Case';
import Gestion from './components/GestionInnovacion/Gestion';
import Informacion from './components/GestionInnovacion/Informacion';
import Politica from './components/GestionInnovacion/Politica';
import Footer from './components/Footer/Footer';
import Equipo from './components/Equipo/Equipo';
import Contact from './components/Contac/Contact';
import Servicios from './components/Servicios/Servicios'; */



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {AllRoutesProject.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))} 
{/*         <Route path='/' element={<Menu />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/' element={<Const />} />
        <Route path='/Const' element={<Const />} />
        <Route path='/Ind' element={<Ind />} />
        <Route path='/Desa' element={<Desa />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Case' element={<Case />} />
        <Route path='/Gestion' element={<Gestion />} />
        <Route path='/Informacion' element={<Informacion />} />
        <Route path='/Politica' element={<Politica />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/Sennovalab' element={<Sennovalab />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Equipo' element={<Equipo />} />
        <Route path='/Servicios' element={<Servicios />} />

 */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;


