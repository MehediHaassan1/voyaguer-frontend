import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import useUserAuth from "../../hooks/useUserAuth";

const Login = () => {
    const { loginUser } = useUserAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        const userEmail = data.email;
        const userPass = data.password;
        loginUser(userEmail, userPass)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    console.log(user);
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
        <div className="bg-[url(https://images.unsplash.com/photo-1503104391828-1ffd78229dda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] opacity-70 bg-cover bg-center min-h-screen">
            <Helmet>
                <title>Login - Voyaguer</title>
            </Helmet>
            <div className=" h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                <div className="max-w-screen-xl mx-auto py-16">
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
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text ">
                                                Email
                                            </span>
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="john@gmail.com"
                                            className="input input-bordered w-full focus:outline-none rounded h-10"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Required",
                                                },
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "Invalid",
                                                },
                                            })}
                                            style={
                                                errors.email
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.email && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {errors.email.message}
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text ">
                                                Password
                                            </span>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="******"
                                                className="input input-bordered w-full focus:outline-none rounded h-10"
                                                {...register("password", {
                                                    required: {
                                                        value: true,
                                                        message: "Required",
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message:
                                                            "6 characters need",
                                                    },
                                                })}
                                                style={
                                                    errors.password
                                                        ? {
                                                              border: "1px solid red",
                                                          }
                                                        : {}
                                                }
                                            />
                                            <div
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="absolute right-0 top-0 mt-2 mr-3 hover:cursor-pointer"
                                            >
                                                {showPassword ? (
                                                    <FaEye className="h-6 w-6 text-orange-500" />
                                                ) : (
                                                    <FaEyeSlash className="h-6 w-6 text-orange-500" />
                                                )}
                                            </div>
                                        </div>
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.password && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.password
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>

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
