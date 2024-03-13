import { useState } from "react";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";

const Packages = () => {
    const [wishList, setWishList] = useState(false);
    return (
        <div className="max-w-screen-xl mx-auto space-y-8 lg:space-y-0 grid grid-cols-1 lg:grid-cols-2 lg:gap-6 relative">
            <div className="flex flex-col justify-center ">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white glass">
                    <div className="w-full md:w-2/5  grid place-items-center">
                        <img
                            src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="tailwind logo"
                            className="rounded-xl w-64 h-64"
                        />
                    </div>
                    <div className="w-full md:w-3/5 text-white flex flex-col justify-center space-y-4 p-3">
                        <div className="flex justify-between item-center">
                            <p className="bg-[#DE7017] px-3 py-1 rounded-full text-xs font-medium">
                                Vacations
                            </p>
                            <div className="flex items-center link link-hover">
                                <FaStar className="h-5 w-5 text-yellow-500"></FaStar>
                                <p className="text-gray-600 font-bold text-sm ml-1">
                                    4.96
                                    <span className="text-gray-500 font-normal">
                                        {" "}
                                        (76 reviews)
                                    </span>
                                </p>
                            </div>
                            <button
                                onClick={() => setWishList(!wishList)}
                                className=""
                            >
                                {wishList ? (
                                    <FaHeart className="w-5 h-5 text-red-500"></FaHeart>
                                ) : (
                                    <FaRegHeart className="w-5 h-5"></FaRegHeart>
                                )}
                            </button>
                        </div>
                        <h3 className="font-black text-gray-300 md:text-3xl text-xl">
                            The Majestic and Wonderful Bahamas
                        </h3>
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-black text-gray-300">
                                $110
                                <span className="font-normal text-gray-400 text-base">
                                    /person
                                </span>
                            </p>
                            <button className="text-lg font-black text-gray-300 bg-[#DE7017]/70 hover:bg-[#DE7017] duration-300 py-1 px-4 rounded">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center ">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white glass">
                    <div className="w-full md:w-2/5  grid place-items-center">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1664299386342-89be565c3459?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="tailwind logo"
                            className="rounded-xl w-64 h-64 object-cover"
                        />
                    </div>
                    <div className="w-full md:w-3/5 text-white flex flex-col justify-center space-y-4 p-3">
                        <div className="flex justify-between item-center">
                            <p className="bg-[#DE7017] px-3 py-1 rounded-full text-xs font-medium">
                                Vacations
                            </p>
                            <div className="flex items-center link link-hover">
                                <FaStar className="h-5 w-5 text-yellow-500"></FaStar>
                                <p className="text-gray-600 font-bold text-sm ml-1">
                                    4.96
                                    <span className="text-gray-500 font-normal">
                                        {" "}
                                        (76 reviews)
                                    </span>
                                </p>
                            </div>
                            <button
                                onClick={() => setWishList(!wishList)}
                                className=""
                            >
                                {wishList ? (
                                    <FaHeart className="w-5 h-5 text-red-500"></FaHeart>
                                ) : (
                                    <FaRegHeart className="w-5 h-5"></FaRegHeart>
                                )}
                            </button>
                        </div>
                        <h3 className="font-black text-gray-300 md:text-3xl text-xl">
                            The Majestic and Wonderful Bahamas
                        </h3>
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-black text-gray-300">
                                $110
                                <span className="font-normal text-gray-400 text-base">
                                    /person
                                </span>
                            </p>
                            <button className="text-lg font-black text-gray-300 bg-[#DE7017]/70 hover:bg-[#DE7017] duration-300 py-1 px-4 rounded">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white glass">
                    <div className="w-full md:w-2/5  grid place-items-center">
                        <img
                            src="https://images.unsplash.com/photo-1623137285532-ec3df3e9abc7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="tailwind logo"
                            className="rounded-xl w-64 h-64"
                        />
                    </div>
                    <div className="w-full md:w-3/5 text-white flex flex-col justify-center space-y-4 p-3">
                        <div className="flex justify-between item-center">
                            <p className="bg-[#DE7017] px-3 py-1 rounded-full text-xs font-medium">
                                Vacations
                            </p>
                            <div className="flex items-center link link-hover">
                                <FaStar className="h-5 w-5 text-yellow-500"></FaStar>
                                <p className="text-gray-600 font-bold text-sm ml-1">
                                    4.96
                                    <span className="text-gray-500 font-normal">
                                        {" "}
                                        (76 reviews)
                                    </span>
                                </p>
                            </div>
                            <button
                                onClick={() => setWishList(!wishList)}
                                className=""
                            >
                                {wishList ? (
                                    <FaHeart className="w-5 h-5 text-red-500"></FaHeart>
                                ) : (
                                    <FaRegHeart className="w-5 h-5"></FaRegHeart>
                                )}
                            </button>
                        </div>
                        <h3 className="font-black text-gray-300 md:text-3xl text-xl">
                            The Majestic and Wonderful Bahamas
                        </h3>
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-black text-gray-300">
                                $110
                                <span className="font-normal text-gray-400 text-base">
                                    /person
                                </span>
                            </p>
                            <button className="text-lg font-black text-gray-300 bg-[#DE7017]/70 hover:bg-[#DE7017] duration-300 py-1 px-4 rounded">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;
