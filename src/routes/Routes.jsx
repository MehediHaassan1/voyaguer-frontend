import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";

import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Community from "../Pages/Community/Community";
import Blogs from "../Pages/Shared/Blogs/Blogs";

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
        ],
    },
]);

export default router;
