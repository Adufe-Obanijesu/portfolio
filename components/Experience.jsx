import { FaBriefcase } from "react-icons/fa";

// animate in view component
import Hoc from "./Hoc";
import Link from "next/link";

const Experience = () => {
  return (
    <section id="experience" className="lg:py-16 py-10">
      <Hoc>
        <p className="smallHeading">experience</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">work experience</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-16 mt-10">
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
              July 2024 - August 2024
            </time>
            <h3 className="font-quicksand tracking-wider text-xl font-bold text-slate-400">
              Frontend Developer Intern @ HNG
            </h3>
            <p className="text-base font-semibold text-slate-400">
            As one of the 523 finalists in the HNG Internship Program (out of 24,123 participants), I collaborated with a diverse team, including frontend developers, backend developers, UI/UX designers, data analysts, project managers, and QA testers. We worked on <Link href="https://tifi.tv" className="text-blue-500" target="_blank">Tifi</Link>, an AI-powered platform, where I contributed to key frontend development tasks. This experience provided a real-world agile environment, enhancing my ability to deliver scalable and high-quality solutions while working with cross-functional teams under tight deadlines.
            </p>
          </li>
        </Hoc>
        <Hoc>
          <li className="py-2 px-2 rounded-lg hover:bg-slate-800/50 transitionItem mb-6 ml-6">
            <div className="absolute w-10 h-10 bg-blue-500 rounded-full mt-1.5 -left-5 border border-slate-200 flex justify-center items-center">
              <FaBriefcase className="text-slate-100" />
            </div>
            <time className="mb-1 text-sm font-medium leading-none text-slate-400">
              August 2023 - June 2024
            </time>
            <h3 className="font-quicksand tracking-wider text-xl font-bold text-slate-400">
              Frontend Developer @ Kadosh Mechatronics
            </h3>
            <p className="text-base font-semibold text-slate-400">
              As a Frontend Software Engineer at Kadosh Mechatronics, I develop cutting-edge IoT solutions that revolutionize user experiences and streamline operations. I design and implement web applications that interact seamlessly with IoT devices, enhancing functionality and engagement. I also develop in-house software to boost productivity and optimize workflows. Additionally, I mentor new developers, fostering a culture of collaboration and continuous learning. At Kadosh Mechatronics, we are committed to delivering innovative IoT technologies that transform industries and enhance lives.
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
              At an Agricultural Firm dedicated to revolutionizing input supply, financing, and marketing extension services through innovative web, mobile and desktop applications, I honed my skills in collaboration and teamwork within the Agile Project Management System. This experience not only deepened my understanding of efficient project workflows but also strengthened my ability to work effectively in cross-functional teams. While there, I contributed to the development of digital solutions aimed at optimizing agricultural processes.
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
              As a Full Stack Developer at WeVoteYou, I led the development and management of a versatile web application designed to address online voting, event ticketing, and opinion polling systems. This experience allowed me to leverage my expertise in frontend technologies such as React.js and backend technologies including PHP and MySQL.

              Throughout my tenure, I focused on creating a comprehensive platform that facilitated seamless online interactions and transactions for users. From conceptualization to deployment, I embraced the challenges of full stack development, honing my skills in both frontend and backend technologies to deliver a robust and user-friendly application.
            </p>
          </li>
        </Hoc>
      </ol>
    </section>
  );
};

export default Experience;
