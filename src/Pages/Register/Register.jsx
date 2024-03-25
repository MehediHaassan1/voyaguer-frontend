import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    const [showPassword, setShowPassword] = useState(false);
    const [disable, setDisable] = useState(true);

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="min-h-screen py-16">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1582875612484-7741221d0ca0?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
                            <h1 className="text-white text-3xl mb-3">
                                Welcome
                            </h1>
                            <div>
                                <p className="text-white text-center">
                                    Discover, Explore, and Connect with
                                    Voyaguer!
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 py-16 px-12">
                            <h2 className="text-3xl mb-4">Register</h2>
                            <p className="mb-4">
                                Create your account. It’s free and only take a
                                minute
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-2 gap-2">
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text ">
                                                First Name
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            className={`input input-bordered w-full focus:outline-none rounded h-10 text-sm`}
                                            {...register("firstName", {
                                                required: {
                                                    value: true,
                                                    message: "Required",
                                                },
                                            })}
                                            style={
                                                errors.firstName
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.firstName && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.firstName
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text ">
                                                Last Name
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            className="input input-bordered w-full focus:outline-none rounded h-10 text-sm"
                                            {...register("lastName", {
                                                required: {
                                                    value: true,
                                                    message: "Required",
                                                },
                                            })}
                                            style={
                                                errors.lastName
                                                    ? {
                                                          border: "1px solid red",
                                                      }
                                                    : {}
                                            }
                                        />
                                        <div className="label">
                                            <span className="label-text-alt">
                                                {errors.lastName && (
                                                    <p
                                                        role="alert"
                                                        className="text-red-600"
                                                    >
                                                        {
                                                            errors.lastName
                                                                .message
                                                        }
                                                    </p>
                                                )}
                                            </span>
                                        </div>
                                    </label>
                                </div>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text ">
                                            Email
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email"
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
                                            placeholder="Password"
                                            className="input input-bordered w-full focus:outline-none rounded h-10"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: "Required",
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/,
                                                    message:
                                                        "Not enough strong",
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
                                                setShowPassword(!showPassword)
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
                                                    {errors.password.message}
                                                </p>
                                            )}
                                        </span>
                                    </div>
                                </label>
                                <div className="mt-5">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-xs rounded border border-orange-500 [--chkbg:theme(colors.orange.600)] [--chkfg:black]"
                                        onChange={() => setDisable(!disable)}
                                    />
                                    <span className="ml-2">
                                        I accept the{" "}
                                        <a
                                            href="#"
                                            className="text-orange-500 link link-hover font-semibold"
                                        >
                                            Terms of Use
                                        </a>{" "}
                                        &{" "}
                                        <a
                                            href="#"
                                            className="text-orange-500 link link-hover font-semibold"
                                        >
                                            Privacy Policy
                                        </a>
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <button
                                        disabled={disable}
                                        className="w-full bg-orange-500 py-3 text-center text-white disabled:cursor-not-allowed disabled:scale-100 hover:scale-105 rounded duration-300"
                                    >
                                        Register Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
