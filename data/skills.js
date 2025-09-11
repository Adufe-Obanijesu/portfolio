import { FaCss3, FaFigma, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiFirebase,
//   SiJest,
  SiMysql,
  SiNextdotjs,
  SiPhp,
//   SiRedux,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { SiExpress, SiMongodb, SiSolidity } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";

import Image from "next/image";

export const skills = [
  { icon: <FaHtml5 className="text-white text-5xl" />, bg: "bg-red-400", label: "HTML5" },
  { icon: <FaCss3 className="text-white text-5xl" />, bg: "bg-blue-400", label: "CSS3" },
  // { icon: <FaSass className="text-white text-5xl" />, bg: "bg-pink-500", label: "Sass" },
  { icon: <BiLogoTailwindCss className="text-white text-5xl" />, bg: "bg-blue-400", label: "TailwindCSS" },
  { icon: <Image src="/images/gsap.webp" width={256} height={256} className="w-24 rounded-full" />, bg: "", label: "GSAP", image: true },
  { icon: <IoAccessibility className="text-white text-5xl" />, bg: "bg-orange-400", label: "Accessibility" },
  { icon: <DiJavascript1 className="text-white text-5xl" />, bg: "bg-yellow-400", label: "JavaScript" },
  { icon: <FaReact className="text-white text-5xl" />, bg: "bg-blue-400", label: "React.js" },
  { icon: <SiNextdotjs className="text-white text-5xl" />, bg: "bg-black", label: "Next.js" },
  { icon: <Image src="/images/zustand.jpg" width={1024} height={607} className="w-24 h-24 object-cover rounded-full" />, bg: "", label: "Zustand", image: true },
  // { icon: <SiRedux className="text-white text-5xl" />, bg: "bg-purple-600", label: "Redux Toolkit" },
  // { icon: <SiJest className="text-white text-5xl" />, bg: "bg-pink-600", label: "Jest" },
  { icon: <SiFirebase className="text-white text-5xl" />, bg: "bg-yellow-400", label: "Firebase" },
  { icon: <FaFigma className="text-white text-5xl" />, bg: "bg-red-400", label: "Figma" },
  { icon: <FaNodeJs className="text-white text-5xl" />, bg: "bg-green-400", label: "Node.js" },
  { icon: <SiExpress className="text-slate-900 text-5xl" />, bg: "bg-slate-100", label: "Express.js" },
  { icon: <SiMongodb className="text-white text-5xl" />, bg: "bg-green-400", label: "MongoDB" },
  { icon: <SiPhp className="text-white text-5xl" />, bg: "bg-purple-500", label: "PHP" },
  { icon: <SiMysql className="text-white text-5xl" />, bg: "bg-blue-600", label: "MySQL" },
  // { icon: <SiSolidity className="text-white text-5xl" />, bg: "bg-purple-400", label: "Solidity" },
  { icon: <BsGit className="text-white text-5xl" />, bg: "bg-orange-600", label: "Git" },
  { icon: <AiFillGithub className="text-white text-5xl" />, bg: "bg-black", label: "Github" },
];