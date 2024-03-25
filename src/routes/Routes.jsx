import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";

import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Community from "../Pages/Community/Community";
import Blogs from "../Pages/Shared/Blogs/Blogs";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "about-us",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "community",
                element: <Community></Community>,
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "contact-us",
                element: <ContactUs></ContactUs>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default router;
