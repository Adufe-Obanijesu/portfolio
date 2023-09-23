import { TbSeo } from "react-icons/tb";
import { FaMobile } from "react-icons/fa";
import { GiPowerLightning } from "react-icons/gi";
import { MdAutoAwesome } from "react-icons/md";

// animate.css
import "animate.css";

// animate in view component
import Hoc from "./Hoc";

// icons
import { HiOutlineCalculator } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="py-16 animate_animated animate_fadeInLeft">
        <Hoc><p className="smallHeading">about me</p></Hoc>
        
        <Hoc><h3 className="heading">who am i?</h3></Hoc>
        
        <Hoc><p className="lg:mt-16 mt-10">
            <strong>Hi there, I'm Obanijesu Adufe.</strong> It is a Yoruba name but you can just call me Joshua. I was lured into web programming when I was told by a friend that I could build my own calculator <HiOutlineCalculator className="inline" />. Six years down the line, I have been able to learn much more than just builidng a web calculator.
            <br />
            <br />
            I have given it my all to thoroughly furnish my skills to ensure I offer quality services in developing stunning and aesthetic looking websites which are responsive across all devices, creating great user experience, fast loading sites and other services based on your needs and specifications. <strong>My goal is to help businesses large or small boost their brand awareness, increase their customer base and drive profit.</strong>
        </p></Hoc>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-4 mt-8">
            
            <Hoc><div className="shadow-lg px-6 py-12 rounded border-b-2 border-blue-400 h-full">
                <GiPowerLightning className="text-blue-400 text-5xl" />
                <h4 className="font-semibold tracking-widest mt-6 font-quicksand">Fast Loading Site</h4>
            </div></Hoc>

            <Hoc><div className="shadow-lg px-6 py-12 rounded border-b-2 border-red-400 h-full">
                <FaMobile className="text-red-400 text-5xl" />
                <h4 className="font-semibold tracking-widest mt-6 font-quicksand">Mobile Friendly</h4>
            </div></Hoc>

            <Hoc><div className="shadow-lg px-6 py-12 rounded border-b-2 border-yellow-400 h-full">
                <TbSeo className="text-yellow-400 text-5xl" />
                <h4 className="font-semibold tracking-widest mt-6 font-quicksand">SEO Optimization</h4>
            </div></Hoc>

            <Hoc><div className="shadow-lg px-6 pt-12 pb-6 rounded border-b-2 border-purple-400">
                <MdAutoAwesome className="text-purple-400 text-5xl" />
                <h4 className="font-semibold tracking-widest mt-6 font-quicksand">Stunning User Interface</h4>
            </div></Hoc>
        
        </div>

    </section>
  )
}

export default About;