import { motion, AnimatePresence } from "framer-motion";

import { TbSeo } from "react-icons/tb";
import { FaMobile } from "react-icons/fa";
import { GiPowerLightning } from "react-icons/gi";
import { MdAutoAwesome } from "react-icons/md";

// animate in view component
import Hoc from "./Hoc";

const children = {
  hidden: {
    x: "-100px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
};

// icons
import { HiOutlineCalculator } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="py-16 animate_animated animate_fadeInLeft">
      <Hoc>
        <p className="smallHeading">about me</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">who am i?</h3>
      </Hoc>

      <Hoc>
        <p className="lg:mt-16 mt-10">
          Hello, my name is <strong>Obanijesu Adufe</strong>. I&apos;m a web developer with over six years of experience in the field. I specialize in creating stunning and responsive websites that provide great user experience and fast loading times. My goal is to help businesses large or small boost their brand awareness, increase their customer base, and drive profit.

          <br />
          <br />
          I have a passion for web development and have spent countless hours honing my skills to ensure that I offer quality services to my clients. I&apos;m proficient in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, React, Node.js, Firebase etc.

          <br />
          <br />

          If you&apos;re looking for a web developer who can help take your business to the next level, please don&apos;t hesitate to get in touch with me. I&apos;d be happy to discuss your needs and specifications and provide you with a quote.
        </p>
      </Hoc>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-4 mt-8">
        <motion.div
          className="shadow-lg shadow-slate-800 px-6 py-12 rounded border-b-2 border-blue-400 h-full"
          variants={children}
          initial="hidden"
          whileInView="visible"
        >
          <GiPowerLightning className="text-blue-400 text-5xl" />
          <h4 className="font-semibold tracking-widest mt-6 font-quicksand">
            Fast Loading Site
          </h4>
        </motion.div>

        <motion.div
          className="shadow-lg shadow-slate-800 px-6 py-12 rounded border-b-2 border-yellow-400 h-full"
          variants={children}
          initial="hidden"
          whileInView="visible"
        >
          <FaMobile className="text-red-400 text-5xl" />
          <h4 className="font-semibold tracking-widest mt-6 font-quicksand">
            Mobile Friendly
          </h4>
        </motion.div>

        <motion.div
          className="shadow-lg shadow-slate-800 px-6 py-12 rounded border-b-2 border-yellow-400 h-full"
          variants={children}
          initial="hidden"
          whileInView="visible"
        >
          <TbSeo className="text-yellow-400 text-5xl" />
          <h4 className="font-semibold tracking-widest mt-6 font-quicksand">
            SEO Optimization
          </h4>
        </motion.div>

        <motion.div
          className="shadow-lg shadow-slate-800 px-6 pt-12 pb-6 rounded border-b-2 border-purple-400"
          variants={children}
          initial="hidden"
          whileInView="visible"
        >
          <MdAutoAwesome className="text-purple-400 text-5xl" />
          <h4 className="font-semibold tracking-widest mt-6 font-quicksand">
            Stunning User Interface
          </h4>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
