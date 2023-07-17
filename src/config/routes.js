import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { AdminHome } from "../pages/Admin/AdminHome";
import { SignIn } from "../pages/Admin/SignIn";
import Nosotros from "../components/About-Us/Nosotros";
import Sennovalab from '../components/Home/Sennovalab';
import Equipo from '../components/Equipo/Equipo';
import Constr from '../components/LineasS/Const';
import Ind from '../components/LineasS/Ind';
import Desa from '../components/LineasS/Desa';
import Case from '../components/Case/Case';
import Gestion from '../components/GestionInnovacion/Gestion';
import Informacion from '../components/GestionInnovacion/Informacion';
import Politica from '../components/GestionInnovacion/Politica';
import Servicios from '../components/Servicios/Servicios'; 
import Contact from '../components/Contac/Contact'; 
import Pqrs from '../components/Pqrs/Pqrs'; 


import { NotFound } from "../pages/General/NotFound/NotFound";
import { ClientLayout } from "../layouts/ClientLayout/ClientLayout";

const AdminRoutes = [
    {path: "/admin", component: AdminHome, layout: GeneralLayout},
    {path: "/admin/sign-in", component: SignIn, layout: GeneralLayout},
];

const GeneralRoutes = [
    {path: "/", component: Sennovalab, layout: ClientLayout},
    {path: "/nosotros", component: Nosotros, layout: ClientLayout},
    {path:"/contact", component: Contact, layout: ClientLayout },
    {path:"/equipo", component: Equipo, layout: ClientLayout},
    {path:"/const", component: Constr, layout: ClientLayout},
    {path:"/ind", component: Ind, layout: ClientLayout},
    {path:"/desa", component: Desa, layout: ClientLayout},
    {path:"/case", component: Case, layout: ClientLayout},
    {path:"/gestion", component: Gestion, layout: ClientLayout},
    {path:"/informacion", component: Informacion, layout: ClientLayout},
    {path:"/politica", component: Politica, layout: ClientLayout},
    {path:"/Pqrs", component: Pqrs, layout: ClientLayout},
    {path:"/servicios", component: Servicios, layout: ClientLayout},
    {path: "*", component: NotFound, layout: ClientLayout}
];


const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;
