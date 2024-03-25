import { FaBars } from "react-icons/fa6";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/VOYAGUER-LOGO.svg";

const NavBar = () => {
    const user = false;
    return (
        <div
            data-aos="fade-down"
            className="fixed top-0 h-16 w-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-50"
        >
            <div className="max-w-screen-xl mx-auto">
                <div className="navbar p-0">
                    <div className="navbar-start">
                        <div className="lg:hidden">
                            <Menu as="div" className="relative inline-block">
                                <div>
                                    <Menu.Button className="inline-flex w-fit justify-center rounded-md text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                        <FaBars className="w-6 h-6"></FaBars>
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/">
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-[#DE7017] text-white"
                                                                    : "text-gray-900"
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            Home
                                                        </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/explore">
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-[#DE7017] text-white"
                                                                    : "text-gray-900"
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            Explore
                                                        </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/search-for-tours">
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-[#DE7017] text-white"
                                                                    : "text-gray-900"
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            Search for Tours
                                                        </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/categories">
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-[#DE7017] text-white"
                                                                    : "text-gray-900"
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            Categories
                                                        </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/blogs">
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-[#DE7017] text-white"
                                                                    : "text-gray-900"
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            Blogs
                                                        </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to="/contact-us">
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-violet-500 text-white"
                                                                    : "text-gray-900"
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            Contact Us
                                                        </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl">
                            <img src={logo} alt="logo" className="h-12" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        [
                                            isActive
                                                ? "border-b-2 border-orange-700 rounded-none focus:text-white"
                                                : "rounded-none text-white my-btn-hover",
                                        ].join(" ")
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/community"
                                    className={({ isActive }) =>
                                        [
                                            isActive
                                                ? "border-b-2 border-orange-700 rounded-none focus:text-white"
                                                : "rounded-none text-white my-btn-hover",
                                        ].join(" ")
                                    }
                                >
                                    Community
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive }) =>
                                        [
                                            isActive
                                                ? "border-b-2 border-orange-700 rounded-none focus:text-white"
                                                : "rounded-none text-white my-btn-hover",
                                        ].join(" ")
                                    }
                                >
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blogs"
                                    className={({ isActive }) =>
                                        [
                                            isActive
                                                ? "border-b-2 border-orange-700 rounded-none focus:text-white"
                                                : "rounded-none text-white my-btn-hover",
                                        ].join(" ")
                                    }
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact-us"
                                    className={({ isActive }) =>
                                        [
                                            isActive
                                                ? "border-b-2 border-orange-700 rounded-none focus:text-white"
                                                : "rounded-none text-white my-btn-hover",
                                        ].join(" ")
                                    }
                                >
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? (
                            <div>
                                <Menu
                                    as="div"
                                    className="relative inline-block text-left"
                                >
                                    <div>
                                        <Menu.Button className="inline-flex items-center gap-2 w-full justify-center rounded-full text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                            <div className="avatar">
                                                <div className="w-8 rounded-full">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className="text-lg">
                                                    Hi Mehedi
                                                </h1>
                                            </div>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-[#DE7017] text-white"
                                                                    : "text-gray-900"
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            Dashboard
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-[#DE7017] text-white"
                                                                    : "text-gray-900"
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            Offers
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-[#DE7017] text-white"
                                                                    : "text-gray-900"
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            Logout
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-[#DE7017] rounded px-6 py-2 text-white font-semibold tracking-wider my-btn-hover duration-300 hover:bg-transparent"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
