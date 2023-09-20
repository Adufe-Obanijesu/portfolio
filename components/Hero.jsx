import { FaReact } from "react-icons/fa";
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
                    My personal portfolio built with React.js <FaReact className="inline text-blue-400 text-xl" /> and TailwindCSS <BiLogoTailwindCss className="inline text-blue-400 text-xl" />
                </p></Hoc>
            </div>

        </header>
    )
}

export default Hero;