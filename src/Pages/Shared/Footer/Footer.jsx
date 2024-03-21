import { Link } from "react-router-dom";
import logo from "../../../assets/VOYAGUER-LOGO.svg";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10">
                <div>
                    <img src={logo} alt="voyaguer logo" />
                    <p className="text-white md:text-xl font-mono my-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit!
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-orange-700 duration-300 hover:border-orange-700">
                            <Link className="">
                                <FaFacebookF className="w-6 h-6 text-white" />
                            </Link>
                        </div>
                        <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-orange-700 duration-300 hover:border-orange-700">
                            <Link className="">
                                <FaInstagram className="w-6 h-6 text-white" />
                            </Link>
                        </div>
                        <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-orange-700 duration-300 hover:border-orange-700">
                            <Link className="">
                                <FaLinkedinIn className="w-6 h-6 text-white" />
                            </Link>
                        </div>
                        <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-orange-700 duration-300 hover:border-orange-700">
                            <Link className="">
                                <FaPinterestP className="w-6 h-6 text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-white tracking-wide">
                        Useful Links
                    </h1>
                    <div className="mt-6 space-y-4">
                        <Link className="flex items-center gap-2 text-white hover:text-orange-700 duration-300">
                            <span>
                                <IoIosArrowForward />
                            </span>
                            Home
                        </Link>
                        <Link className="flex items-center gap-2 text-white hover:text-orange-700 duration-300">
                            <span>
                                <IoIosArrowForward />
                            </span>
                            Tours
                        </Link>
                        <Link className="flex items-center gap-2 text-white hover:text-orange-700 duration-300">
                            <span>
                                <IoIosArrowForward />
                            </span>
                            Destinations
                        </Link>
                        <Link className="flex items-center gap-2 text-white hover:text-orange-700 duration-300">
                            <span>
                                <IoIosArrowForward />
                            </span>
                            Support
                        </Link>
                        <Link className="flex items-center gap-2 text-white hover:text-orange-700 duration-300">
                            <span>
                                <IoIosArrowForward />
                            </span>
                            Community
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-white tracking-wide">
                        Our Instagram
                    </h1>
                    <div className="mt-6 grid grid-cols-3 gap-2">
                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="hover:scale-125 duration-300 h-20 object-cover"
                            />
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="hover:scale-125 duration-300 h-20 object-cover"
                            />
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="hover:scale-125 duration-300 h-20 object-cover"
                            />
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="hover:scale-125 duration-300 h-20 object-cover"
                            />
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="hover:scale-125 duration-300 h-20 object-cover"
                            />
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="hover:scale-125 duration-300 h-20 object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    <h1 className="text-xl font-bold text-white tracking-wide">
                        Subscribe
                    </h1>
                    <p className="font-mono md:text-xl my-4">
                        Subscribe Our Newsletter For Getting Quick Updates
                    </p>
                    <form>
                        <input
                            type="text"
                            className="w-full p-2 rounded border-2 border-orange-700 focus:outline-none text-black"
                            placeholder="example@gmail.com"
                        />
                        <input
                            type="submit"
                            value="Subscribe"
                            className="py-2 px-4 bg-orange-700 mt-4 rounded tracking-wide cursor-pointer"
                        />
                    </form>
                </div>
            </div>
            <div className="divider divider-error"></div>
            <footer className="footer items-center p-4 text-white">
                <aside className="items-center grid-flow-col">
                    <p className="text-center">
                        Copyright &copy; {new Date().getFullYear()} VOYAGUER -
                        All right reserved
                    </p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link>Privacy</Link>
                    <Link>Terms & Conditions</Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
