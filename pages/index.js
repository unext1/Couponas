import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="dark:bg-gray-800 ">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center w-full md:flex-row text-center md:text-left">
            <div className="md:pr-32">
              <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
                The Couponas app
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                quia asperiores alias vero magnam recusandae adipisci ad vitae
                laudantium quod rem voluptatem eos accusantium cumque.
              </p>
              <div className="mt-6 mb-5 md:mb-0">
                <Link href="/login">
                  <a className="block px-4 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-purple-700  rounded-md md:inline">
                    Sign Up Now !
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              className="object-cover w-full h-96 rounded-md"
              src="https://thedesigntrip.com/wp-content/uploads/2019/06/Image-01-01.jpg"
              alt="Web illustration"
            />
          </div>
        </div>
      </header>
      {/* <div className="container mx-auto md:py-20 pt-10 pb-32 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="max-h-[384px] md:h-screen">
            <img
              className="w-screen h-96 md:h-full   object-cover object-top rounded-md"
              src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="my-auto bg-gray-100 md:pl-32">
            <div className="w-full text-center mt-10 md:mt-0 md:text-right">
              <h1 className="text-3xl uppercase">Laurynas Valiulis</h1>
              <p className="font-semibold mb-5">Web Developer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede.
              </p>
              <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">
                Email Me
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
