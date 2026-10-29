import { motion } from "framer-motion";

// animate in view component
import Hoc from "./Hoc";
import { about_skills } from "../data/about";
import { cn } from "../utils/tailwind";

const children = {
  hidden: {
    x: "-40px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="lg:py-16 py-10 border-b border-slate-800">
      <Hoc>
        <p className="smallHeading">about me</p>
      </Hoc>

      <Hoc>
        <h2 className="heading">who am i?</h2>
      </Hoc>

      <Hoc>
        <p className="mt-8">
          Curiosity birthed my career in tech back in 2017 as a Mechanical
          Engineering freshman. One question changed the course of my life:{" "}
          <span className="text-white bg-slate-800 border border-slate-700 py-0.5 px-2 rounded font-medium">
            &quot;Do you know you could build your own calculator?&quot;
          </span>{" "}
          That single question lit the spark — and I dove headfirst into
          programming, exploring frontend, backend, and UI/UX before finding
          where I truly belong: frontend development, where I build things
          people can see, interact with, and enjoy.
        </p>

        <p className="mt-4">
          I&apos;ve been coding since 2017 and building professionally since
          2021, delivering web experiences across fintech, embedded systems,
          educational platforms, and agri-tech. Strong in React, Next.js,
          TypeScript, and GSAP animation, I have built complex interfaces
          like financial dashboards and interactive learning applications, while
          staying comfortable on the backend whenever a project calls for it.
        </p>
      </Hoc>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
        {about_skills.map((skill, index) => (
          <motion.div
            key={index}
            className={cn(
              "bg-slate-800 border border-slate-700 border-b-4 px-6 py-8 rounded h-full",
              skill.border_color,
            )}
            variants={children}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <skill.icon className={cn("text-4xl", skill.text_color)} />
            <h3 className="font-bold text-sm uppercase tracking-wider text-white mt-5">
              {skill.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
