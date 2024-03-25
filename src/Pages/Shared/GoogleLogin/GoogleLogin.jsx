import google from "../../../assets/google.png";

const GoogleLogin = () => {
    return (
        <div>
            <button className="bg-white border py-2 w-full rounded mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
                <img src={google} alt="google logo" className="h-6" />
                <span className="ml-4">Login with Google</span>
            </button>
        </div>
    );
};

export default GoogleLogin;
