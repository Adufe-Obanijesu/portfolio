import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";

// image
import profilePic from "../public/images/profile.webp";
import { links } from "../data/links";

const sidebar = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.25,
    },
  },
  exit: {
    x: "-10vw",
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

const Sidebar = ({ show, setShow }) => {
  return (
    <AnimatePresence>
      <motion.aside
        id="sidebar"
        className="overflow-x-hidden overflow-y-auto bg-slate-800 border-r border-slate-700 px-10 md:px-7 lg:px-8 py-10 h-full fixed w-3/4 md:w-auto md:block z-20"
        variants={sidebar}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex justify-center">
          <Image
            src={profilePic}
            className="rounded-full xl:h-44 xl:w-44 lg:h-52 md:h-28 lg:w-52 md:w-28 w-40 h-40 object-cover border-2 border-slate-700"
            alt="Adufe Obanijesu"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-bold text-center text-white tracking-wide">
            Obanijesu Adufe
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 text-center font-semibold mt-1">
            Frontend Developer
          </p>
        </div>

        <nav className="flex flex-col items-center mt-6 font-quicksand">
          {links.map((link) => (
            <Link
              key={link.href}
              className="sidebarLink"
              onClick={() => setShow(false)}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 pt-6 border-t border-slate-700 flex justify-center">
          <a
            href="/pdf/Obanijesu Adufe - Resume.pdf"
            download="Obanijesu Adufe - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2.5 rounded transition-colors duration-150"
          >
            <FiDownload className="text-sm" />
            Resume PDF
          </a>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
