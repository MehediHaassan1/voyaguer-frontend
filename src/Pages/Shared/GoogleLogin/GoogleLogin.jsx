import { useLocation, useNavigate } from "react-router-dom";
import google from "../../../assets/google.png";
import useUserAuth from "../../../hooks/useUserAuth";

const GoogleLogin = () => {
    const { googleUser } = useUserAuth();

    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleUser()
            .then((result) => {
                const user = result.user;
                if (user) {
                    navigate(from, { replace: true });
                }
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                className="bg-white border py-2 w-full rounded mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 "
            >
                <img src={google} alt="google logo" className="h-6" />
                <span className="ml-4">Login with Google</span>
            </button>
        </div>
    );
};

export default GoogleLogin;
