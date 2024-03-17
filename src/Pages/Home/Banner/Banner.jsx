import { Link } from "react-router-dom";
import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
const Banner = () => {
    return (
        <div className="min-h-screen maskImage relative bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=1517&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
            <div className="max-w-screen-xl mx-auto relative h-screen">
                <div className="flex items-center justify-center h-screen">
                    <div className="text-white text-center space-y-4 max-w-md">
                        <h1
                            className="text-3xl md:text-5xl abril-fatface-regular uppercase tracking-widest"
                            data-aos="fade-up"
                        >
                            Journey into the Unknown
                        </h1>
                        <p
                            className="md:text-xl font-mono"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-offset="0"
                        >
                            Embark on a Journey of Discovery and Create Memories
                            to Last Forever
                        </p>
                        <button
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-offset="0"
                            className="bg-[#DE7017] rounded py-2 px-6 text-white font-semibold tracking-wider"
                        >
                            <Link to="/explore">Start a tour</Link>
                        </button>
                    </div>
                </div>
                {/* icon section */}
                <div className="hidden absolute left-0 top-1/2 text-white transform -translate-y-1/2 md:flex flex-start items-center justify-center">
                    <div className="space-y-6">
                        <Link
                            className="block text-white hover:text-[#DE7017] duration-300"
                            data-aos="fade-right"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </Link>
                        <Link
                            className="block text-white hover:text-[#DE7017] duration-300"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            <FaFacebookF className="w-6 h-6" />
                        </Link>
                        <Link
                            className="block text-white hover:text-[#DE7017] duration-300"
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </Link>
                        <Link
                            className="block text-white hover:text-[#DE7017] duration-300"
                            data-aos="fade-right"
                            data-aos-delay="400"
                        >
                            <FaLinkedinIn className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 animate-bounce flex flex-col items-center justify-center">
                    <IoIosArrowRoundDown className="text-orange-300 h-10 w-10" />
                    <p className="text-white">scroll down</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
