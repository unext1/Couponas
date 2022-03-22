import { Fragment, useState } from "react";
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
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Contact", href: "/contact", icon: UsersIcon },
    { name: "Login", href: "/login", icon: MenuIcon },
  ];

  const router = useRouter();

  return (
    <div className="relative z-10 ">
      <div className="fixed hidden h-full md:flex">
        <div className="flex flex-col flex-1 px-5 border-r-2 border-brand-dark-700 bg-brand-dark-900 ">
          <div className="flex flex-col flex-1 pt-6 overflow-y-auto">
            <div className="mx-auto cursor-pointer">
              <Link href="/">
                <motion.h1
                  whileTap={{ scale: 1.1, rotate: 0 }}
                  whileHover={{ rotate: 10, scale: 0.9 }}
                  className="text-5xl font-semibold tracking-wider text-transparent uppercase bg-clip-text bg-gradient-to-b from-red-500 to-blue-700 via-red-500"
                  style={{ lineHeight: 1.1 }}
                >
                  Q
                </motion.h1>
                {/* <a>
                  <motion.img
                    whileTap={{ scale: 1.1, rotate: 0 }}
                    whileHover={{ rotate: 10, scale: 0.9 }}
                    src="/icon1.webp"
                    className="w-12 h-12 text-white"
                    style={{ filter: "invert(100%) " }}
                  />
                </a> */}
              </Link>
            </div>
            <nav className="mt-5 flex-1 space-y-2.5 ">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="flex group">
                    <div className="sidebar-tooltip group-hover:scale-100 my-auto mt-1.5 z-50 ">
                      {item.name}
                    </div>
                    <motion.div
                      whileTap={{ scale: 0.8 }}
                      className={classNames(
                        router.asPath == item.href
                          ? "bg-red-500 text-white "
                          : "text-neutral-500 hover:bg-red-500 hover:text-white ",
                        "group flex items-center px-3 py-2.5 text-sm rounded-xl "
                      )}
                    >
                      <item.icon
                        className={classNames(
                          router.asPath == item.href
                            ? "text-white"
                            : "text-neutral-500 group-hover:text-white",
                          "flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                    </motion.div>
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="fixed flex items-center justify-center w-full p-5 md:hidden bottom-5 ">
        <div className="w-full max-w-md mx-auto ">
          <div className="rounded-full shadow-2xl bg-brand-dark-600 bg-opacity-90 ">
            <div className="flex py-2">
              <div className="flex justify-around w-full px-5 my-auto">
                {/* <div className="group">
                  <Link href="/">
                    <a className="flex items-end justify-center w-full text-center text-neutral-700 group-hover:text-red-500">
                      <CalendarIcon className="flex items-center w-6 h-6" />
                    </a>
                  </Link>
                </div> */}
                <div className="group">
                  <Link href="/contact">
                    <a
                      className={`flex items-end justify-center w-full text-center  ${
                        router.pathname == "/contact"
                          ? "text-red-500"
                          : "text-neutral-400"
                      }`}
                    >
                      <span className="sr-only">Contact</span>
                      <UsersIcon className="flex items-center w-6 h-6" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center flex-1 w-full h-full mx-auto my-auto outline-none cursor-pointer group">
                <Link href="/">
                  <a>
                    <motion.div
                      whileTap={{ scale: 0.8 }}
                      transition={{ duration: 0.1 }}
                      className="w-12 h-12 my-auto text-center bg-red-500 rounded-full"
                    >
                      <span className="sr-only">Home</span>
                      <HomeIcon className="flex items-center w-full h-full p-2.5 mx-auto text-white" />
                    </motion.div>
                  </a>
                </Link>
              </div>
              <div className="flex justify-around w-full px-5 my-auto ">
                <div className="group">
                  <Link href="/blog">
                    <a
                      className={`flex items-end justify-center w-full text-center  ${
                        router.pathname == "/blog"
                          ? "text-red-500"
                          : "text-neutral-400"
                      }`}
                    >
                      <span className="sr-only">Blog</span>
                      <FolderIcon className="flex items-center w-6 h-6" />
                    </a>
                  </Link>
                </div>
                {/* <div className="group">
                  <Link href="/">
                    <a className="flex items-end justify-center w-full text-center text-neutral-700 group-hover:text-red-500">
                      <InboxIcon className="flex items-center w-6 h-6" />
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="hidden md:flex w-80">
<div className="flex flex-col flex-1 min-h-0 px-5 border-r-2 border-brand-dark-700 bg-brand-dark-900 ">
  <div className="flex flex-col flex-1 pt-6 overflow-y-auto">
    <motion.div whileTap={{ scale: 1.2 }} className="mx-auto mb-3">
      <Link href="/">
        <a>
          <img
            src="/icon1.webp"
            className="h-16 text-white"
            style={{ filter: "invert(100%) " }}
          />
        </a>
      </Link>
    </motion.div>
    <nav className="mt-5 flex-1 space-y-2.5">
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            className={classNames(
              router.asPath == item.href
                ? "bg-red-500 text-white "
                : "text-neutral-700 hover:bg-red-500 hover:text-white ",
              "group flex items-center px-3 py-2.5 text-sm rounded-md "
            )}
          >
            <item.icon
              className={classNames(
                router.asPath == item.href
                  ? "text-white"
                  : "text-neutral-700 group-hover:text-white",
                "mr-3 flex-shrink-0 h-6 w-6"
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        </Link>
      ))}
    </nav>
  </div>
  <div className="flex flex-shrink-0 p-4"></div>
</div>
</div> */
}
