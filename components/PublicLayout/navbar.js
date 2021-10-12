import Link from "next/link";
import { AuthContext } from "../auth";
import { useContext } from "react";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <nav className="dark:bg-gray-800 md:block hidden">
        <div className="container p-6 mx-auto">
          <Link href="/">
            <a className="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
              Couponas
            </a>
          </Link>
          <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
            <Link href="/">
              <a className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-600 mx-1.5 sm:mx-6">
                home
              </a>
            </Link>
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-600 mx-1.5 sm:mx-6"
            >
              features
            </a>

            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-600 mx-1.5 sm:mx-6"
            >
              pricing
            </a>

            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-600 mx-1.5 sm:mx-6"
            >
              blog
            </a>

            {currentUser ? (
              <div className="flex">
                <Link href="/app">
                  <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-600 mx-1.5 sm:mx-6">
                    Go to app
                  </a>
                </Link>
              </div>
            ) : (
              <Link href="/login">
                <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-600 mx-1.5 sm:mx-6">
                  Login
                </a>
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center px-2 w-full fixed md:hidden bottom-2">
        <div className="w-full max-w-md mx-auto ">
          <div className="bg-white shadow-lg rounded-xl">
            <div className="flex py-2">
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-2 pt-1 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 my-auto">
                    <i className="fa fa-home text-xl block"></i>
                    <span className="block text-xs">Home</span>
                    <span className="block w-full mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                  </span>
                </a>
              </div>
              <div className="flex-1 group mx-auto flex">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-2 pt-1 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 my-auto">
                    <i className="fa fa-compass text-xl block"></i>
                    <span className="block text-xs">Explore</span>
                    <span className="block w-full mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                  </span>
                </a>
              </div>
              <div className="flex-1 group w-full h-full px- my-auto mx-auto flex justify-center cursor-pointer outline-none">
                <Link href="/">
                  <div className="h-12 w-12 bg-indigo-700 rounded-full text-center my-auto">
                    <i className="fa fa-home text-2xl text-white my-auto mt-2"></i>
                  </div>
                </Link>
              </div>
              <div className="flex-1 group">
                <a
                  href="#"
                  className="flex items-end justify-center text-center mx-auto px-2 pt-1 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="block px-1 my-auto">
                    <i className="fa fa-search text-xl block"></i>
                    <span className="block text-xs">Search</span>
                    <span className="block w-full mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                  </span>
                </a>
              </div>
              <div className="flex-1 group">
                <Link href="/login">
                  <a className="flex items-end justify-center text-center mx-auto px-2 pt-1 w-full text-gray-400 group-hover:text-indigo-500">
                    <span className="block px-1 my-auto">
                      <i className="fa fa-cog text-xl block"></i>
                      <span className="block text-xs">Login</span>
                      <span className="block w-full mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
