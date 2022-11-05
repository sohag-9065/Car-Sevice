import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Orders from "../pages/Orders/Orders";
import Checkout from "../pages/Checkout/Checkout";
import ErrorPage from "../shared/ErrorPage";
import ProtectRoute from "./ProtectRoute";
import Blog from "../pages/Blog/Blog";
import Payment from "../pages/Payment/Payment";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            },
            {
                path: '/checkout/:id',
                element:
                    <ProtectRoute>
                        <Checkout></Checkout>
                    </ProtectRoute>,
                loader: ({ params }) => fetch(`https://genious-car-server-ecru.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element:
                    <ProtectRoute>
                        <Orders></Orders>
                    </ProtectRoute>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            }

        ]
    }
]);

export default router;