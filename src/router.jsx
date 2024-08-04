import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/login";
import SimpleNavFooter from "./pagesWrappers/simple-nav-footer";
import NavFooter from "./pagesWrappers/nav-footer";
import User from "./pages/User/user";
import RequiresAuthentication from "./pagesWrappers/requires-authentication";

export const Router = createBrowserRouter([
    {
        path : "/",
        element : <SimpleNavFooter />,
        children : [
            {
                path : "/",
                element : <Login />
            }
        ]
    },
    {
        path : "/",
        element: <RequiresAuthentication />,
        children : [
            {
                path : "/",
                element : <NavFooter />,
                children : [
                    {
                        path : "/users",
                        element : <User />
                    }
                ]
            }
        ]
    }
]);