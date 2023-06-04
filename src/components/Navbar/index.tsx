import React, {useState} from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-transparent mt-[25px]">
            <div className="max-w-[1459px] mx-auto px-2 sm:px-[70px] xxl:px-[49px] lg:px-[70px] md:block hidden">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex ">

                        <img
                            className="block h-auto w-auto sm:hidden"
                            src="/jobseeker/logo.svg"
                            alt="Logo"
                        />
                        <img
                            className="hidden h-auto w-auto sm:block"
                            src="/jobseeker/logo.svg"
                            alt="Logo"
                        />
                    </div>
                    <div className="flex   items-center justify-center ">

                        <div className="flex lg:space-x-4 sm:space-x-[5px]">
                            <a
                                href="/"
                                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Resources
                            </a>
                            <a
                                href="#"
                                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                About us </a>
                            <a
                                href="#"
                                className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div
                        className=" flex  pr-2 sm:static gap-2 sm:inset-auto sm:ml-6 sm:pr-0">

                        <button
                            type="button"
                            className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                            Sign Up
                        </button>
                    </div>

                </div>


            </div>


            <div className=" sm:hidden">
                <div className="max-w-[700px] mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center">

                            <img
                                className="block h-8 w-auto"
                                src="/jobseeker/logo.svg"
                                alt="Logo"
                            />
                        </div>
                        <div className="absolute inset-y-0 right-0 flex justify-start items-center ">

                            <button
                                type="button"
                                className="inline-flex  p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={toggleNavbar}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <div className="flex justify-center ml-2 gap-2 flex-row">
                                <div>
                                    <button
                                        type="button"
                                        className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium mx-auto block"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium mx-auto block"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={`${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 flex  flex-col items-end justify-end space-y-1">
                        <a
                            href="#"
                            className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Resources </a>
                        <a
                            href="#"
                            className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About Us
                        </a>
                        <a
                            href="#"
                            className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact Us
                        </a>

                    </div>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
