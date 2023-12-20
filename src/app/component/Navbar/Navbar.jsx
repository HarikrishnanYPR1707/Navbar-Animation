import { motion } from "framer-motion";

const Navbar = ({ activeNav, setActiveNav }) => {
  return (
    <motion.div
      className=" absolute bottom-5 left-1/2 h-[40px] w-[100px] rounded-xl bg-teal-600 text-white"
      initial={{
        translateX: "-50%",
      }}
      animate={
        activeNav
          ? {
              y: -60,
              width: "90vw",
              height: 60,
              translateX: "-50%",
              opacity: 1,
            }
          : {
              width: 100,
              opacity: 0,
            }
      }
      transition={{
        ease: "backInOut",
        duration: 1,
      }}
    >
      Navbar content
    </motion.div>
  );
};

export default Navbar;
