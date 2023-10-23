// icons
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";

// animate in view component
import Hoc from "./Hoc";

const Hero = () => {
    return (
        <header id="home" className="relative md:pt-12 pt-16">
            <div className="z-0">
                <Hoc><h1 className="font-extrabold lg:text-5xl md:text-4xl text-2xl tracking-[0.15em]">
                    I am a Full Stack<br />Web Developer
                </h1></Hoc>

                <Hoc><p className="mt-4 text-lg">
                    My personal portfolio built with Next.js <span className="relative z-10"><SiNextdotjs className="inline text-black text-xl z-20" /><span className="absolute bottom-[1px] left-[2px] h-4 w-4 bg-white -z-10 rounded-full"></span></span> and TailwindCSS <BiLogoTailwindCss className="inline text-blue-400 text-xl" />
                </p></Hoc>
            </div>

        </header>
    )
}

export default Hero;