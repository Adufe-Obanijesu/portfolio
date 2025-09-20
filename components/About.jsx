import { motion } from "framer-motion";

import { GiPowerLightning } from "react-icons/gi";
import { IoGlobeOutline, IoSparkles } from "react-icons/io5";
import { LiaUsersSolid } from "react-icons/lia";

// animate in view component
import Hoc from "./Hoc";
import { about_skills } from "../data/about";
import { cn } from "../utils/tailwind";

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
        <p className="xl:mt-12 mt-10">
          Curiosity birthed my career in tech back in 2017 as a Mechanical Engineering freshman. One question changed the course of my life: <span className="text-slate-300 bg-slate-700 py-1 px-1 rounded-md">&quot;Do you know you could build your own calculator?&quot;</span> That single question lit the spark — and I dove headfirst into programming, exploring frontend, backend, and even UI/UX before finding where I truly belong: frontend development, where I can build things people can see, interact with, and enjoy.
        </p>

        <br />

        <p>
          Since then, I&apos;ve contributed to projects across a fintech startup, a mechatronics lab, an agricultural firm, and media, each experience deepening my skills and shaping the way I create web experiences.
        </p>
      </Hoc>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-col-1 gap-4 mt-8">
        {about_skills.map((skill, index) => (
          <motion.div
            key={index}
            className={cn(
              "shadow-lg shadow-slate-800 px-6 py-12 rounded border-b-2 h-full",
              skill.border_color,
            )}
            variants={children}
            initial="hidden"
            whileInView="visible"
          >
            <skill.icon className={cn("text-5xl", skill.text_color)} />
            <h4 className="font-semibold tracking-widest mt-6 font-quicksand">
              {skill.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
