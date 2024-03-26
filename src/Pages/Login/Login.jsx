import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => console.log(data);
    return (
        <div className="bg-[url(https://images.unsplash.com/photo-1503104391828-1ffd78229dda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] opacity-70 bg-cover bg-center min-h-screen">
            <Helmet>
                <title>Login - Voyaguer</title>
            </Helmet>
            <div className=" h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                <div className="max-w-screen-xl mx-auto pt-16">
                    <section className="border-red-500  min-h-screen flex items-center justify-center">
                        <div className="bg-gray-100 p-5 flex items-center rounded-2xl shadow-lg max-w-3xl">
                            <div className="md:w-1/2 px-5">
                                <h2 className="text-2xl font-bold text-[#002D74]">
                                    Login
                                </h2>
                                <p className="text-sm mt-4 text-[#002D74]">
                                    If you have an account, please login
                                </p>
                                <form
                                    className="mt-6"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div>
                                        <label className="block text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter Email Address"
                                            className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-orange-500 focus:bg-white focus:outline-none"
                                            autoFocus
                                            {...register("email", {
                                                required: true,
                                            })}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-gray-700">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Enter Password"
                                                minLength="6"
                                                className="w-full px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-orange-500
                  focus:bg-white focus:outline-none"
                                                {...register("password", {
                                                    required: true,
                                                })}
                                            />
                                            <div
                                                className="absolute right-0 top-0 mt-5 mr-2 cursor-pointer"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <FaEye className="w-6 h-6 text-orange-500" />
                                                ) : (
                                                    <FaEyeSlash className="w-6 h-6 text-orange-500" />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right mt-2">
                                        <Link
                                            href="#"
                                            className="text-sm font-semibold text-orange-900  link link-hover"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full block bg-orange-500 hover:bg-orange-600 focus:bg-orange-500 text-white font-semibold rounded
                px-4 py-3 mt-6 duration-300"
                                    >
                                        Log In
                                    </button>
                                </form>

                                <div className="divider divider-neutral">
                                    OR
                                </div>

                                <GoogleLogin></GoogleLogin>

                                <div className="text-sm flex justify-between items-center mt-3">
                                    <p>If you don't have an account...</p>
                                    <button
                                        onClick={() => navigate("/register")}
                                        className="py-2 px-5 ml-3 bg-white border rounded hover:scale-110 duration-300 border-orange-400  "
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>

                            <div className="w-1/2 md:block hidden ">
                                <img
                                    src="https://images.unsplash.com/photo-1663215746329-38fcba14fe0d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="rounded-2xl"
                                    alt="page img"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Login;
