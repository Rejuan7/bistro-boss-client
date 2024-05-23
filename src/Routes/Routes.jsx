import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Providers/PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element: <DashBoard></DashBoard>,
      children:[
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);
export default router;