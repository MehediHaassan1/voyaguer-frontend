import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Explore from "../Pages/Explore/Explore";
import SearchForTours from "../Pages/SearchForTours/SearchForTours";
import Categories from "../Pages/Categories/Categories";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";

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
                path: "explore",
                element: <Explore></Explore>,
            },
            {
                path: "search-for-tours",
                element: <SearchForTours></SearchForTours>,
            },
            {
                path: "categories",
                element: <Categories></Categories>,
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
