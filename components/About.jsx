import { motion } from "framer-motion";

import { GiPowerLightning } from "react-icons/gi";
import { IoGlobeOutline } from "react-icons/io5";
import { LiaUsersSolid } from "react-icons/lia";
import { SiSolidity } from "react-icons/si";

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
    <section id="about" className="lg:py-16 py-10 animate_animated animate_fadeInLeft">
      <Hoc>
        <p className="smallHeading">about me</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">who am i?</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-16 mt-10">
          I&apos;m <strong>Obanijesu Adufe</strong>, a dedicated Full Stack Software Engineer with 7+ years experience, specializing in Frontend Development with expertise in React.js, Next.js, and TypeScript

          <br />
          <br />
          At Lint Finance (Fintech Startup), I work with designers, backend developers, QA testers, and project managers to develop a financial management dashboard that helps users optimize budgets, automate payments, and manage virtual cards. Our platform currently serves over 500 active users and is growing.

          <br />
          <br />

          Previously, at Kadosh Mechatronics, I developed embedded systems and web interfaces for smart automation projects like voice-controlled home automation, a smart dust extractor, and a kitchen assistant. I also mentored junior developers, helping them build real-world applications.

          <br />
          <br />

          During the HNG program, I was among 523 finalists out of 24,123 participants, contributing to TiFi, an AI-powered content transformation platform. A key achievement was migrating the entire application from client-side rendering (CSR) to server-side rendering (SSR), significantly improving performance and SEO.
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
