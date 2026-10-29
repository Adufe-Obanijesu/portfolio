// icons
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { LuMail } from "react-icons/lu";

// animate in view component
import Hoc from "./Hoc";

const Hero = () => {
  return (
    <header id="home" className="relative md:pt-14 pt-16 pb-6 border-b border-slate-800">
      <div className="z-0">
        <Hoc>
          <p className="smallHeading mb-3">obanijesu adufe</p>
          <h1 className="font-extrabold lg:text-5xl md:text-4xl text-3xl tracking-[0.12em] leading-tight">
            I am a
            <br />
            Frontend Developer
          </h1>
        </Hoc>

        <Hoc>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl">
            Coding since 2017 and building professionally since 2021 across
            fintech, embedded systems, and educational platforms. Currently
            leading development of Oasis.
          </p>
        </Hoc>

        <Hoc>
          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="/pdf/Obanijesu Adufe - Resume.pdf"
              download="Obanijesu Adufe - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-150"
            >
              <FiDownload className="text-base" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-150"
            >
              <LuMail className="text-base" />
              Get in Touch
            </a>
          </div>
        </Hoc>
      </div>
    </header>
  );
};

export default Hero;
