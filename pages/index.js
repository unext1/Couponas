import { useContext, useEffect } from "react";
import Link from "next/link";
import { AuthContext } from "../components/auth";

import { motion } from "framer-motion";

export default function Home() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  return (
    <div className="relative flex w-full h-full bg-brand-dark-900 ">
      <div className="relative py-36 lg:py-40 ">
        <div className="mx-auto lg:grid lg:grid-cols-5 ">
          <div className="col-span-3 my-auto ">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                y: { type: "spring", stiffness: 120 },
              }}
              className="lg:pr-52"
            >
              <p className="flex text-sm text-white">
                Hi there this is what i've have came up with.
              </p>
              <motion.h1
                className="-ml-1 text-6xl font-semibold tracking-wider text-transparent uppercase bg-clip-text bg-gradient-to-r from-red-500 to-blue-700 xl:text-7xl 2xl:text-8xl"
                style={{ lineHeight: 1.1 }}
              >
                Q-pong
              </motion.h1>
              <p
                className="mt-5 text-sm font-semibold tracking-wide text-white lg:text-base"
                style={{ lineHeight: 1.3 }}
              >
                Welcome to "Q-Pong". The app where you can manage your all
                coupons. Want to get started with your coupons ? Click here !
              </p>
              <div className="flex mt-10">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="relative group "
                >
                  <div className="absolute transition duration-200 opacity-75 -inset-0 bg-gradient-to-r from-red-500 to-blue-700 rounded-xl blur group-hover:opacity-100 group-hover:duration-200 animate-tilt"></div>
                  <Link href="/register">
                    <a className="relative flex items-center px-7 py-2.5 leading-none divide-x divide-gray-500 md:py-4 md:px-10 bg-brand-dark-900 rounded-xl">
                      <span className="text-gray-100">Sign Up</span>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="items-center justify-center hidden w-full col-span-2 py-10 my-auto lg:flex bg-brand-dark-800 rounded-2xl">
            <motion.img
              whileHover={{ rotate: 10, scale: 0.9 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                y: { type: "spring", stiffness: 120, delay: 0.1 },
              }}
              src="https://freepikpsd.com/file/2020/01/Coupon-PNG-Transparent-Picture.png"
              alt="peace emoji"
              className="w-2/3 p-5 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
