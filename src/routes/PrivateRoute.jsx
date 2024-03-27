import { Navigate, useLocation } from "react-router-dom";
import useUserAuth from "../hooks/useUserAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useUserAuth();
    let location = useLocation();

    if (loading)
        return (
            <div className="text-6xl flex items-center justify-center">
                Loading...
            </div>
        );

    if (user) return children;

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
