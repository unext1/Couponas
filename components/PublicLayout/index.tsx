import { motion } from "framer-motion";
import Navbar from "./navbar";

export const PublicLayout = ({ children }) => {
  return (
    <div className="relative flex w-full h-full bg-brand-dark-900 selection:bg-red-500 selection:text-white">
      <div className="mr-0 md:mr-[90px]">
        <Navbar />
      </div>
      <motion.main
        exit="out"
        initial="initial"
        animate="in"
        className="container px-6 mx-auto md:px-8"
      >
        {children}
      </motion.main>
    </div>
  );
};
