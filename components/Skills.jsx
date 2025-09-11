import { motion } from "framer-motion";

// animate in view component
import Hoc from "./Hoc";

// icons
import { FaTools } from "react-icons/fa";
import { skills } from "../data/skills";
import { cn } from "../utils/tailwind";

const container = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0.9,
  },
};

const children = {
  scale: {
    scale: [1, 1.1, 1],
  },
};

const Skills = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      id="skills"
      className="lg:py-16 py-10 relative"
    >
      <Hoc>
        <p className="smallHeading">my specialty</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">my skills</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-16 mt-10">
          Over the past seven years, I&apos;ve had the opportunity to learn and
          master a variety of tools and programming languages{" "}
          <FaTools className="inline" />. You may find me building with these:
        </p>
      </Hoc>

      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 mt-8">
        {skills.map((skill, idx) => (
          <Hoc key={idx}>
            <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
              <div className="flex justify-center">
                <motion.div
                  variants={children}
                  whileInView="scale"
                  className={cn(
                    `flex justify-center items-center ${
                      !skill.image ? skill.bg : ""
                    }`,
                    { "rounded-full h-24 w-24": !skill.image },
                  )}
                >
                  {skill.icon}
                </motion.div>
              </div>
              <p className="font-semibold text-center mt-4">{skill.label}</p>
            </div>
          </Hoc>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
