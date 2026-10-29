import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const Hoc = ({ children }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="min-w-0 max-w-full"
    >
      {children}
    </motion.div>
  );
};

export default Hoc;
