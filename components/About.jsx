import { motion } from "framer-motion";

import { GiPowerLightning } from "react-icons/gi";
import { IoGlobeOutline, IoSparkles } from "react-icons/io5";
import { LiaUsersSolid } from "react-icons/lia";

// animate in view component
import Hoc from "./Hoc";

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
    <section
      id="about"
      className="lg:py-16 py-10 animate_animated animate_fadeInLeft"
    >
      <Hoc>
        <p className="smallHeading">about me</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">who am i?</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-16 mt-10">
          I&apos;m <strong>Obanijesu Adufe</strong>, a frontend developer with 7+ years&apos; experience, specializing in building engaging interfaces and bringing websites to life with web animations (GSAP, React, Next.js, TypeScript), backed by full-stack expertise.
        </p>

          <br />
        
        <p>
          Recently, I&apos;ve dedicated time to mastering web animations with GSAP, learning how to improve performance in animation-heavy sites, and studying accessibility practices to ensure websites remain usable alongside motion.
        </p>

          <br />

        <p>
          From developing web dashboards for IoT systems at Kadosh Mechatronics, to building the frontend of an AI-powered content transformation platform at HNG in collaboration with designers, QA testers, backend developers, etc., to developing a fintech web application at Lint Finance, my journey has also led me to delve into web animation—bringing interfaces to life.
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
          className="shadow-lg shadow-slate-800 px-6 pt-12 pb-6 rounded border-b-2 border-purple-400"
          variants={children}
          initial="hidden"
          whileInView="visible"
        >
          <IoSparkles className="text-purple-400 text-5xl" />
          <h4 className="font-semibold tracking-widest mt-6 font-quicksand">
            Web Animations
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

      </div>
    </section>
  );
};

export default About;
