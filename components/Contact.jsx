import Link from "next/link";

import { LuMail } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

// animate in view component
import Hoc from "./Hoc";

// icons
import { BiSolidPhone } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contact" className="lg:py-16 py-10">
      <Hoc>
        <p className="smallHeading">get in touch</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">contact</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-16 mt-10">
          Impressed with my work & skills? Want to work with me? You can reach
          out to me through the social media handles below or you can simply
          give me a call <BiSolidPhone className="inline" />.
        </p>
      </Hoc>

      <div className="mt-8">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
          <Hoc>
            <div className="flex gap-4 flex-row items-center mb-4">
              <Link className="" href="mailto:obanijesuadufe8@gmail.com">
                <span className="bg-slate-800/50 rounded-lg h-28 w-28 flex justify-center items-center">
                  <LuMail className="text-4xl text-red-500" />
                </span>
              </Link>
              <Link
                className="text-blue-300"
                href="mailto:obanijesuadufe8@gmail.com"
              >
                obanijesuadufe@gmail.com
              </Link>
            </div>
          </Hoc>

          <Hoc>
            <div className="flex gap-4 flex-row items-center mb-4">
              <Link
                className=""
                href="https://ng.linkedin.com/in/obanijesu-adufe"
              >
                <span className="bg-slate-800/50 rounded-lg h-28 w-28 flex justify-center items-center">
                  <FaLinkedinIn className="text-4xl text-blue-600" />
                </span>
              </Link>
              <Link
                className="text-blue-300"
                href="https://ng.linkedin.com/in/obanijesu-adufe"
              >
                obanijesu-adufe
              </Link>
            </div>
          </Hoc>

          <Hoc>
            <div className="flex gap-4 flex-row items-center mb-4">
              <Link className="" href="https://github.com/Adufe-Obanijesu">
                <span className="bg-slate-800/50 rounded-lg h-28 w-28 flex justify-center items-center">
                  <AiFillGithub className="text-4xl text-black" />
                </span>
              </Link>
              <Link
                className="text-blue-300"
                href="https://github.com/Adufe-Obanijesu"
              >
                Adufe-Obanijesu
              </Link>
            </div>
          </Hoc>

          <Hoc>
            <div className="flex gap-4 flex-row items-center mb-4">
              <Link className="" href="tel:+2348146917054">
                <span className="bg-slate-800/50 rounded-lg h-28 w-28 flex justify-center items-center">
                  <FaWhatsapp className="text-4xl text-green-500" />
                </span>
              </Link>
              <Link className="text-blue-300" href="tel:+2348146917054">
                +234 814 691 7054
              </Link>
            </div>
          </Hoc>
        </div>

        {/*<div>
                    <form>
                        <Hoc><input type="text" placeholder="Name" /></Hoc>
                        <Hoc><input type="email" placeholder="Email" /></Hoc>
                        <Hoc><input type="text" placeholder="Subject" /></Hoc>
                        <Hoc><textarea placeholder="Name" rows={4}className="mb-2"></textarea></Hoc>
                        <Hoc><button className="uppercase px-4 py-2 bg-blue-600 text-white text-sm tracking-wider font-thin hover:bg-blue-500">send message</button></Hoc>
                    </form>
                </div>*/}
      </div>
    </section>
  );
};

export default Contact;
