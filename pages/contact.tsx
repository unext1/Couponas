import { motion } from "framer-motion";

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 0.15 },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative flex items-center h-screen overflow-hidden"
    >
      <div className="w-full h-full mx-auto">
        <div className="relative flex items-center justify-center w-full h-full text-center">
          <div className="z-10 w-full text-3xl font-bold lg:text-7xl md:text-7xl xl:text-8xl">
            <motion.h1
              initial={{ x: -1000, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 50 },
              }}
              className="mb-1 text-white lg:mb-5"
            >
              Want to get
            </motion.h1>
            <motion.h1
              initial={{ x: 1000, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 50 },
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-700"
            >
              in touch ?
            </motion.h1>
            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.1 }}
              className="relative mt-5 text-sm tracking-widest text-white cursor-pointer lg:mt-10 md:text-xl "
            >
              <a href="mailto:unextbusinessman@gmail.com">Contact now</a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
