import { useEffect } from "react";

export default function Home() {
  return (
    <div>
      <header className="dark:bg-gray-800">
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
                <a
                  href="#"
                  className="block px-4 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-purple-700  rounded-md md:inline"
                >
                  Download from App Store
                </a>
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
    </div>
  );
}
