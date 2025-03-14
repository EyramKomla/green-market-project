import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/home/home";
import Signin from "../pages/signIn/signin";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path:'home',
                element:<Home />
            },
            {path:'signIn',
                element:<Signin/>
            }

        ]
    }
])