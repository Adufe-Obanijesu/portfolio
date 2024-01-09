import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { FaCss3, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiFirebase, SiNextdotjs } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

// animate in view component
import Hoc from "./Hoc";

// icons
import { FaTools } from "react-icons/fa";

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
      className="md:py-16 py-10 relative"
    >
      <Hoc>
        <p className="smallHeading">my specialty</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">my skills</h3>
      </Hoc>

      <Hoc>
        <p className="lg:mt-16 mt-10">
          Over the past six years, I&apos;ve had the opportunity to learn and master a variety of tools and programming languages <FaTools className="inline" />, but here are my
          preferences. You may find me building your next big project with
          these.
        </p>
      </Hoc>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8 mt-8">
        <Hoc>
          <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
            <div className="flex justify-center">
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full h-24 w-24 bg-red-400 flex justify-center items-center"
              > 
                <FaHtml5 className="text-white text-5xl" />
              </motion.div>
            </div>
            <p className="font-semibold text-center mt-4">HTML5</p>
          </div>
        </Hoc>

        <Hoc>
          <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
            <div className="flex justify-center">
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full h-24 w-24 bg-blue-400 flex justify-center items-center"
              >
                <FaCss3 className="text-white text-5xl" />
              </motion.div>
            </div>
            <p className="font-semibold text-center mt-4">CSS3</p>
          </div>
        </Hoc>

        <Hoc>
          <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
            <div className="flex justify-center">
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full h-24 w-24 bg-yellow-400 flex justify-center items-center"
              >
                <DiJavascript1 className="text-white text-5xl" />
              </motion.div>
            </div>
            <p className="font-semibold text-center mt-4">JavaScript</p>
          </div>
        </Hoc>

        <Hoc>
          <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
            <div className="flex justify-center">
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full h-24 w-24 bg-blue-400 flex justify-center items-center"
              >
                <FaReact className="text-white text-5xl" />
              </motion.div>
            </div>
            <p className="font-semibold text-center mt-4">React.js</p>
          </div>
        </Hoc>

        <Hoc>
          <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
            <div className="flex justify-center">
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full h-24 w-24 bg-black flex justify-center items-center"
              >
                <SiNextdotjs className="text-white text-5xl" />
              </motion.div>
            </div>
            <p className="font-semibold text-center mt-4">Next.js</p>
          </div>
        </Hoc>

        <Hoc>
          <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
            <div className="flex justify-center">
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full h-24 w-24 bg-yellow-400 flex justify-center items-center"
              >
                <SiFirebase className="text-white text-5xl" />
              </motion.div>
            </div>
            <p className="font-semibold text-center mt-4">Firebase</p>
          </div>
        </Hoc>

        <Hoc>
          <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
            <div className="flex justify-center">
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full h-24 w-24 bg-red-400 flex justify-center items-center"
              >
                <FaFigma className="text-white text-5xl" />
              </motion.div>
            </div>
            <p className="font-semibold text-center mt-4">Figma</p>
          </div>
        </Hoc>

        <Hoc>
          <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
            <div className="flex justify-center">
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full h-24 w-24 bg-blue-400 flex justify-center items-center"
              >
                <BiLogoTailwindCss className="text-white text-5xl" />
              </motion.div>
            </div>
            <p className="font-semibold text-center mt-4">TailwindCSS</p>
          </div>
        </Hoc>

        <Hoc>
          <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
            <div className="flex justify-center">
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full h-24 w-24 bg-orange-600 flex justify-center items-center"
              >
                <BsGit className="text-white text-5xl" />
              </motion.div>
            </div>
            <p className="font-semibold text-center mt-4">Git</p>
          </div>
        </Hoc>

        <Hoc>
          <div className="hover:bg-slate-800/50 bg-slate-900 shadow-transparent hover:shadow-blue-400 rounded transition duration-900 ease-in py-4 hover:shadow-sm">
            <div className="flex justify-center">
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full h-24 w-24 bg-black flex justify-center items-center"
              >
                <AiFillGithub className="text-white text-5xl" />
              </motion.div>
            </div>
            <p className="font-semibold text-center mt-4">Github</p>
          </div>
        </Hoc>
      </div>
    </motion.section>
  );
};

export default Skills;
