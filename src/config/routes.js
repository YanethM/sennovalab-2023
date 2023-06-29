import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { AdminHome } from "../pages/Admin/AdminHome";
import { SignIn } from "../pages/Admin/SignIn";
import Const from "../components/LineasS/Const";
import Ind from "../components/LineasS/Ind";
import Desa from "../components/LineasS/Desa";
import Case from "../components/About-Us/Case";
import Nosotros from "../components/About-Us/Nosotros";


import { Contact } from "../pages/General/Contact";
import { Home } from "../pages/General/Home";
import { NotFound } from "../pages/General/NotFound/NotFound";

const AdminRoutes = [
    {path: "/admin", component: AdminHome, layout: GeneralLayout},
    {path: "/admin/sign-in", component: SignIn, layout: GeneralLayout},
    {path: "/lines/const", component: Const, layout: GeneralLayout},
    {path: "/lines/ind", component: Ind, layout: GeneralLayout},
    {path: "/lines/des", component: Desa, layout: GeneralLayout},
    {path: "/Case", component: Case, layout: GeneralLayout},
    {path: "/Nosotros", component: Nosotros, layout: GeneralLayout},
    
    
];
const GeneralRoutes = [
    {path: "/", component: Home, layout: GeneralLayout},
    {path: "/contact", component: Contact, layout: GeneralLayout},
    {path: "*", component: NotFound, layout: GeneralLayout}
];
const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;
