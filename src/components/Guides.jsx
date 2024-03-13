import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { GiDetour } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";

import { Link } from "react-router-dom";

const Guides = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 justify-items-center">
            <div className="max-w-xs shadow-lg rounded-lg overflow-hidden my-4 relative">
                <div className="h-56 relative">
                    <img
                        className="w-full h-full object-cover object-center pl-6"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        alt="avatar"
                    />
                    <div className="absolute  ml-1 top-1/2 text-white transform -translate-y-1/2 md:flex flex-start items-center justify-center">
                        <div className="space-y-4">
                            <Link className="block text-white hover:text-[#DE7017] duration-300">
                                <AiFillInstagram className="w-10 h-10 border-4 border-[#0D141A] rounded-full bg-[#0D141A]" />
                            </Link>
                            <Link className="block text-white bg-transparent hover:text-[#DE7017] duration-300">
                                <MdFacebook className="w-10 h-10 border-4 border-[#0D141A] rounded-full  bg-[#0D141A]" />
                            </Link>
                            <Link className="block text-white hover:text-[#DE7017] duration-300">
                                <TiSocialLinkedinCircular className="w-10 h-10 border-4 border-[#0D141A] rounded-full bg-[#0D141A]" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="py-4 px-6">
                    <h1 className="text-2xl text-white">Patterson johnson</h1>
                    <div className="flex items-center mt-4 text-gray-400">
                        <GiDetour className="h-6 w-6 fill-current"></GiDetour>
                        <h1 className="px-2 text-sm">Site seeing</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-400">
                        <SlLocationPin className="h-4 w-4 fill-current"></SlLocationPin>
                        <h1 className="px-2 text-sm">California</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-xs shadow-lg rounded-lg overflow-hidden my-4 relative">
                <div className="h-56 relative">
                    <img
                        className="w-full h-full object-cover object-center pl-6"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        alt="avatar"
                    />
                    <div className="hidden absolute  ml-1 top-1/2 text-white transform -translate-y-1/2 md:flex flex-start items-center justify-center">
                        <div className="space-y-4">
                            <Link className="block text-white hover:text-[#DE7017] duration-300">
                                <AiFillInstagram className="w-10 h-10 border-4 border-[#0D141A] rounded-full bg-[#0D141A]" />
                            </Link>
                            <Link className="block text-white bg-transparent hover:text-[#DE7017] duration-300">
                                <MdFacebook className="w-10 h-10 border-4 border-[#0D141A] rounded-full  bg-[#0D141A]" />
                            </Link>
                            <Link className="block text-white hover:text-[#DE7017] duration-300">
                                <TiSocialLinkedinCircular className="w-10 h-10 border-4 border-[#0D141A] rounded-full bg-[#0D141A]" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="py-4 px-6">
                    <h1 className="text-2xl text-white">Patterson johnson</h1>
                    <div className="flex items-center mt-4 text-gray-400">
                        <GiDetour className="h-6 w-6 fill-current"></GiDetour>
                        <h1 className="px-2 text-sm">City Tour</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-400">
                        <SlLocationPin className="h-4 w-4 fill-current"></SlLocationPin>
                        <h1 className="px-2 text-sm">Sydney</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-xs shadow-lg rounded-lg overflow-hidden my-4 relative">
                <div className="h-56 relative">
                    <img
                        className="w-full h-full object-cover object-center pl-6"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        alt="avatar"
                    />
                    <div className="hidden absolute  ml-1 top-1/2 text-white transform -translate-y-1/2 md:flex flex-start items-center justify-center">
                        <div className="space-y-4">
                            <Link className="block text-white hover:text-[#DE7017] duration-300">
                                <AiFillInstagram className="w-10 h-10 border-4 border-[#0D141A] rounded-full bg-[#0D141A]" />
                            </Link>
                            <Link className="block text-white bg-transparent hover:text-[#DE7017] duration-300">
                                <MdFacebook className="w-10 h-10 border-4 border-[#0D141A] rounded-full  bg-[#0D141A]" />
                            </Link>
                            <Link className="block text-white hover:text-[#DE7017] duration-300">
                                <TiSocialLinkedinCircular className="w-10 h-10 border-4 border-[#0D141A] rounded-full bg-[#0D141A]" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="py-4 px-6">
                    <h1 className="text-2xl text-white">Patterson johnson</h1>
                    <div className="flex items-center mt-4 text-gray-400">
                        <GiDetour className="h-6 w-6"></GiDetour>
                        <h1 className="px-2 text-sm">Historical Tour</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-400">
                        <SlLocationPin className="h-5 w-5 fill-current"></SlLocationPin>
                        <h1 className="px-2 text-sm">Bangladesh</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guides;
