import { FaBriefcase } from "react-icons/fa";

// animate in view component
import Hoc from "./Hoc";

const Experience = () => {
  return (
    <section id="experience" className="md:py-16 py-10">
      <Hoc>
        <p className="smallHeading">experience</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">work experience</h3>
      </Hoc>

      <Hoc>
        <p className="lg:mt-16 mt-10">
        Throughout my career, I&apos;ve had the privilege of working with a variety of companies in different fields, including engineering, social enterprise, agriculture, and real estate. These experiences have given me the real-world experience I needed to become a well-rounded web developer. Here are some of the most impactful companies I&apos;ve worked with.
        </p>
      </Hoc>

      <ol className="relative border-l border-slate-400 ml-4 mt-8">
        <Hoc>
          <li className="py-2 px-2 rounded-lg hover:bg-slate-800/50 transitionItem mb-6 ml-6">
            <div className="absolute w-10 h-10 bg-blue-500 rounded-full mt-1.5 -left-5 border border-slate-200 flex justify-center items-center">
              <FaBriefcase className="text-slate-100" />
            </div>
            <time className="mb-1 text-sm font-medium leading-none text-slate-400">
              August 2023 - Now
            </time>
            <h3 className="font-quicksand tracking-wider text-xl font-bold text-slate-400">
              Frontend Developer @ Kadosh Mechatronics
            </h3>
            <p className="text-base font-semibold text-slate-400">
              I am a valued member of the IoT team, contributing my expertise to the development of sophisticated Web User Interfaces for innovative IoT solutions and devices. My responsibilities encompass the design and implementation of user interfaces that enhance the overall user experience, aligning seamlessly with our team's commitment to delivering cutting-edge IoT technologies.
            </p>
          </li>
        </Hoc>
        <Hoc>
          <li className="py-2 px-2 rounded-lg hover:bg-slate-800/50 transitionItem mb-6 ml-6">
            <div className="absolute w-10 h-10 bg-blue-500 rounded-full mt-1.5 -left-5 border border-slate-200 flex justify-center items-center">
              <FaBriefcase className="text-slate-100" />
            </div>
            <time className="mb-1 text-sm font-medium leading-none text-slate-400">
              March 2023 - August 2023
            </time>
            <h3 className="font-quicksand tracking-wider text-xl font-bold text-slate-400">
              Frontend Developer Intern @ OFNL
            </h3>
            <p className="text-base font-semibold text-slate-400">
              I worked in this agricultural firm that aimed to revolutionize input supply, financing, and marketing extension services through web and mobile applications. During my tenure, I honed my skills in collaboration and teamwork while working within the <strong>Agile Project Management System</strong>.
            </p>
          </li>
        </Hoc>
        <Hoc>
          <li className="py-2 px-2 rounded-lg hover:bg-slate-800/50 transitionItem ml-6">
            <div className="absolute w-10 h-10 bg-blue-500 rounded-full mt-1.5 -left-5 border border-slate-200 flex justify-center items-center">
              <FaBriefcase className="text-slate-100" />
            </div>
            <time className="mb-1 text-sm font-medium leading-none text-slate-400">
              June 2021 - July 2023
            </time>
            <h3 className="font-quicksand tracking-wider text-xl font-bold text-slate-400">
              Full Stack Developer @ WeVoteYou
            </h3>
            <p className="text-base font-semibold text-slate-400">
              I was contracted to develop and manage a 3-in-1 web application using React.js, PHP, and MySQL Database. The platform was established to provide lasting solutions to online paid voting systems, event ticketing, and opinion polls.
            </p>
          </li>
        </Hoc>
      </ol>
    </section>
  );
};

export default Experience;
