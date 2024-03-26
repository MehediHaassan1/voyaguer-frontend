import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import "react-datepicker/dist/react-datepicker.css";

import AOS from "aos";
import "aos/dist/aos.css";
import UserAuthContext from "./contexts/UserAuthContext.jsx";

AOS.init({ once: true });

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <div className="bg-[#0D141A]">
                <UserAuthContext>
                    <RouterProvider router={router} />
                </UserAuthContext>
            </div>
        </HelmetProvider>
    </React.StrictMode>
);
