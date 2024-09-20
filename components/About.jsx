import { motion, AnimatePresence } from "framer-motion";

import { GiPowerLightning } from "react-icons/gi";
import { IoGlobeOutline } from "react-icons/io5";
import { LiaUsersSolid } from "react-icons/lia";
import { SiSolidity } from "react-icons/si";

// animate in view component
import Hoc from "./Hoc";
import Link from "next/link";

const children = {
  hidden: {
    x: "-100px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <section id="about" className="lg:py-16 py-10 animate_animated animate_fadeInLeft">
      <Hoc>
        <p className="smallHeading">about me</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">who am i?</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-16 mt-10">
          I&apos;m <strong>Obanijesu Adufe</strong>, a dedicated Full Stack Software Engineer and Web3 enthusiast with a passion for crafting intuitive and visually appealing user interfaces. With over six years of experience, I specialize in building efficient web applications using React.js and Next.js.

          <br />
          <br />
          Previously, I worked at Kadosh Mechatronics, where I develop sophisticated Web User Interfaces for IoT solutions and create in-house software to streamline operations and boost productivity. I also mentor new developers, contributing to their growth and development.

          <br />
          <br />

          During my time at HNG, I collaborated with a multidisciplinary team on real-world projects, including <Link href="https://tifi.tv" className="text-blue-500" target="_blank">Tifi</Link>. This experience strengthened my skills in frontend development and teamwork in an agile environment.
        </p>
      </Hoc>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-col-1 gap-4 mt-8">

        <motion.div
          className="shadow-lg shadow-slate-800 px-6 py-12 rounded border-b-2 border-red-400 h-full"
          variants={children}
          initial="hidden"
          whileInView="visible"
        >
          <IoGlobeOutline className="text-red-400 text-5xl" />
          <h4 className="font-semibold tracking-widest mt-6 font-quicksand">
            Full Stack Development
          </h4>
        </motion.div>

        <motion.div
          className="shadow-lg shadow-slate-800 px-6 py-12 rounded border-b-2 border-blue-400 h-full"
          variants={children}
          initial="hidden"
          whileInView="visible"
        >
          <GiPowerLightning className="text-blue-400 text-5xl" />
          <h4 className="font-semibold tracking-widest mt-6 font-quicksand">
            Performance Optimization
          </h4>
        </motion.div>

        <motion.div
          className="shadow-lg shadow-slate-800 px-6 py-12 rounded border-b-2 border-yellow-400 h-full"
          variants={children}
          initial="hidden"
          whileInView="visible"
        >
          <LiaUsersSolid className="text-yellow-400 text-5xl" />
          <h4 className="font-semibold tracking-widest mt-6 font-quicksand">
            Mentor & Team Player
          </h4>
        </motion.div>

        <motion.div
          className="shadow-lg shadow-slate-800 px-6 pt-12 pb-6 rounded border-b-2 border-purple-400"
          variants={children}
          initial="hidden"
          whileInView="visible"
        >
          <SiSolidity className="text-purple-400 text-5xl" />
          <h4 className="font-semibold tracking-widest mt-6 font-quicksand">
            Web3 Enthusiast
          </h4>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
