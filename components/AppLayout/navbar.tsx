import Link from "next/link";
import { Fragment, useEffect, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { AuthContext } from "../auth";

const navigation = [
  { name: "Dashboard", href: "/app", icon: HomeIcon },
  { name: "Profile", href: "/app/profile", icon: UsersIcon },
  { name: "Coupons", href: "/app/coupon", icon: FolderIcon },
  { name: "Scanner", href: "/app/scanner", icon: ChartBarIcon },
];

export default function Navbar() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return null;
  }
  return (
    <div className="flex h-screen overflow-hidden from-blue-600 via-blue-600 to-purple-700">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs bg-gradient-to-b from-blue-600 via-blue-600 to-purple-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 pt-2 -mr-12">
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <h1 className="text-2xl font-semibold tracking-wider text-white">
                    <Link href="/">Q-Pong</Link>
                  </h1>
                </div>
                <nav className="px-2 mt-5 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={
                        router.asPath == item.href
                          ? "bg-indigo-600 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          : "text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      }
                    >
                      <item.icon
                        className="flex-shrink-0 w-6 h-6 mr-4 text-white"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex flex-shrink-0 p-4 border-t border-indigo-800">
                <a href="#" className="flex-shrink-0 block group">
                  <div className="flex items-center">
                    <div>
                      {currentUser.photoURL ? (
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src={currentUser.photoURL}
                            alt=""
                          />
                        </div>
                      ) : (
                        <div className="flex-shrink-0">
                          <img
                            className="inline-block w-10 h-10 rounded-full"
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">
                        {currentUser.displayName
                          ? currentUser.displayName
                          : currentUser.email.substring(
                              0,
                              currentUser.email.lastIndexOf("@")
                            )}
                      </p>
                      <p className="text-sm font-medium text-indigo-200 group-hover:text-white">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden bg-purple-600 bg-gradient-to-b md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-1 min-h-0">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <h1 className="text-2xl font-semibold tracking-wider text-white">
                  <Link href="/">Q-Pong</Link>
                </h1>
              </div>
              <nav className="flex-1 px-2 mt-5 space-y-2">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <a
                      className={
                        router.asPath == item.href
                          ? "bg-indigo-600 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          : "text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      }
                    >
                      <item.icon
                        className="flex-shrink-0 w-6 h-6 mr-3 text-white"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 pb-8">
              <Link href="/app/profile">
                <a className="flex-shrink-0 block w-full group">
                  <div className="flex items-center">
                    {currentUser.photoURL ? (
                      <div className="flex-shrink-0">
                        <img
                          className="w-12 h-12 rounded-full"
                          src={currentUser.photoURL}
                          alt=""
                        />
                      </div>
                    ) : (
                      <div className="flex-shrink-0">
                        <img
                          className="inline-block w-10 h-10 rounded-full"
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                          alt=""
                        />
                      </div>
                    )}
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white capitalize ">
                        {currentUser.displayName
                          ? currentUser.displayName
                          : currentUser.email.substring(
                              0,
                              currentUser.email.lastIndexOf("@")
                            )}
                      </p>
                      <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-20 flex flex-col flex-1 overflow-hidden bg-gray-100 shadow top-2 right-3 rounded-xl">
        <div className="md:hidden p-0.5">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
