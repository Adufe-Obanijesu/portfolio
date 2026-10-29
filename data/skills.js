import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiArduino,
  SiC,
  SiDocusaurus,
  SiIonic,
  SiCapacitor,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { BsGit, BsCpu } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { IoSparkles } from "react-icons/io5";

import Image from "next/image";

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      {
        icon: <FaReact className="text-blue-400 text-2xl shrink-0" />,
        label: "React",
      },
      {
        icon: <SiNextdotjs className="text-white text-2xl shrink-0" />,
        label: "Next.js",
      },
      {
        icon: <SiTypescript className="text-blue-500 text-2xl shrink-0" />,
        label: "TypeScript",
      },
      {
        icon: <DiJavascript1 className="text-yellow-400 text-2xl shrink-0" />,
        label: "JavaScript",
      },
      {
        icon: <FaHtml5 className="text-orange-500 text-2xl shrink-0" />,
        label: "HTML5",
      },
      {
        icon: <FaCss3 className="text-blue-400 text-2xl shrink-0" />,
        label: "CSS3",
      },
      {
        icon: <BiLogoTailwindCss className="text-sky-400 text-2xl shrink-0" />,
        label: "TailwindCSS",
      },
      {
        icon: (
          <Image
            src="/images/gsap.webp"
            alt="GSAP"
            width={24}
            height={24}
            className="w-6 h-6 rounded-sm object-cover shrink-0"
          />
        ),
        label: "GSAP",
      },
      {
        icon: (
          <Image
            src="/images/zustand.jpg"
            alt="Zustand"
            width={24}
            height={24}
            className="w-6 h-6 rounded-sm object-cover shrink-0"
          />
        ),
        label: "Zustand",
      },
    ],
  },
  {
    name: "Backend & Databases",
    skills: [
      {
        icon: <FaNodeJs className="text-green-500 text-2xl shrink-0" />,
        label: "Node.js",
      },
      {
        icon: <SiFirebase className="text-amber-400 text-2xl shrink-0" />,
        label: "Firebase",
      },
    ],
  },
  {
    name: "Embedded",
    skills: [
      {
        icon: <SiArduino className="text-teal-400 text-2xl shrink-0" />,
        label: "Arduino",
      },
      {
        icon: <BsCpu className="text-emerald-400 text-2xl shrink-0" />,
        label: "ESP8266",
      },
      {
        icon: <SiC className="text-blue-400 text-2xl shrink-0" />,
        label: "C",
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      {
        icon: <BsGit className="text-orange-500 text-2xl shrink-0" />,
        label: "Git",
      },
      {
        icon: <AiFillGithub className="text-slate-200 text-2xl shrink-0" />,
        label: "GitHub",
      },
      {
        icon: <FaFigma className="text-purple-400 text-2xl shrink-0" />,
        label: "Figma",
      },
      {
        icon: <SiDocusaurus className="text-green-400 text-2xl shrink-0" />,
        label: "Docusaurus",
      },
      {
        icon: <IoSparkles className="text-amber-300 text-2xl shrink-0" />,
        label: "AI-Assisted Dev",
      },
    ],
  },
  {
    name: "Familiar With",
    skills: [
      {
        icon: <SiIonic className="text-sky-400 text-2xl shrink-0" />,
        label: "Ionic",
      },
      {
        icon: <SiCapacitor className="text-blue-400 text-2xl shrink-0" />,
        label: "Capacitor",
      },
      {
        icon: <SiExpress className="text-slate-300 text-2xl shrink-0" />,
        label: "Express.js",
      },
      {
        icon: <SiMongodb className="text-emerald-500 text-2xl shrink-0" />,
        label: "MongoDB",
      },
      {
        icon: <FaPython className="text-yellow-400 text-2xl shrink-0" />,
        label: "Python",
      },
      {
        icon: <SiPhp className="text-indigo-400 text-2xl shrink-0" />,
        label: "PHP",
      },
      {
        icon: <SiMysql className="text-blue-500 text-2xl shrink-0" />,
        label: "MySQL",
      },
    ],
  },
];
