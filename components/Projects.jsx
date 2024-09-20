import Image from "next/image";
import { FaEye } from "react-icons/fa";

// images
import kadosh from "../public/images/kadosh.jpg";
import tifi from "../public/images/tifi.png";
import dictionary from "../public/images/dictionary.png";
import hotel from "../public/images/hotel.jpg";
import todo from "../public/images/todo.jpg";
import typing from "../public/images/typing.png";
import hng_shop from "../public/images/hng-shop.png";

// animate in view component
import Hoc from "./Hoc";

const Projects = () => {
  return (
    <section id="work" className="lg:py-16 py-10">
      <Hoc>
        <p className="smallHeading">my projects</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">recent projects</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-16 mt-10">
        I have experience working on multiple projects, some of which I have highlighted below.
        </p>
      </Hoc>

      <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 mt-8">
        <Hoc>
          <a target="_blank" href="https://tifi.tv">
            <div className="shadow-md shadow-slate-800 h-full flex flex-col">
              <Image
                src={tifi}
                className="object-cover w-full"
                alt="typing"
              />
              <div className="p-4 flex flex-col justify-between grow">
                <div>
                  <h4 className="font-bold tracking-wide">
                    AI-Powered Platform
                  </h4>
                  <p>
                  I collaborated with a diverse team at HNG to develop Tifi, an AI-powered platform that converts various content types (scripts, images, PDFs) into videos and summaries.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Hoc>
        
        <Hoc>
          <a target="_blank" href="https://main--clinquant-hotteok-5dfeb9.netlify.app/">
            <div className="shadow-md shadow-slate-800 h-full flex flex-col">
              <Image
                src={hng_shop}
                className="object-cover w-full"
                alt="typing"
              />
              <div className="p-4 flex flex-col justify-between grow">
                <div>
                  <h4 className="font-bold tracking-wide">
                    Online Clothing Store
                  </h4>
                  <p>
                  Developed a stunning online store specializing in women&apos;s clothing. Features include product browsing, shopping cart management, checkout experience and more. Built with Next.js and Timbu API.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Hoc>

        <Hoc>
          <a target="_blank" href="https://typing-eight-chi.vercel.app/">
            <div className="shadow-md shadow-slate-800 h-full flex flex-col">
              <Image
                src={typing}
                className="object-cover w-full"
                alt="typing"
              />
              <div className="p-4 flex flex-col justify-between grow">
                <div>
                  <h4 className="font-bold tracking-wide">
                    Typing Web Application (Mavis Beacon)
                  </h4>
                  <p>
                  Inspired by my childhood experience with Mavis Beacon, I created this web-based typing app featuring a scoreboard, progress chart, background music, and more. It’s designed to make learning to type fun and engaging, helping users improve their typing skills.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Hoc>

        <Hoc>
          <a target="_blank" href="https://www.kadoshmechatronics.com">
            <div className="shadow-md shadow-slate-800 h-full flex flex-col">
              <Image
                src={kadosh}
                className="object-cover w-full"
                alt="project"
              />
              <div className="p-4 flex flex-col justify-between grow">
                <div>
                  <h4 className="font-bold tracking-wide">
                    Kadosh Mechatronics
                  </h4>
                  <p>
                  Currently in development, our website at Kadosh Mechatronics provides comprehensive insights into our company, highlighting our innovative IoT solutions. It serves as a platform to showcase our commitment, reflecting our dedication to driving meaningful progress in the industry.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Hoc>

        <Hoc>
          <a target="_blank" href="https://phenomenal-duckanoo-637e8f.netlify.app/">
            <div className="shadow-md shadow-slate-800 h-full flex flex-col">
              <Image
                src={dictionary}
                className="object-cover w-full"
                alt="project"
              />
              <div className="p-4 flex flex-col justify-between grow">
                <div>
                  <h4 className="font-bold tracking-wide">
                    Dictionary Web App
                  </h4>
                  <p>
                  This dictionary app designed to make exploring and understanding words a delightful experience.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Hoc>

        <Hoc>
          <a target="_blank" href="https://cheerful-wisp-6f1261.netlify.app/">
            <div className="shadow-md shadow-slate-800 h-full">
              <Image
                src={hotel}
                className="object-cover w-full"
                alt="project"
              />
              <div className="p-4">
                <h4 className="font-bold tracking-wide">Hotel Website</h4>
                <p>
                  Catch the attention of your guests, travelers or tourists with
                  this stunning and professional looking website.
                </p>
              </div>
            </div>
          </a>
        </Hoc>

        {/* <Hoc>
          <a target="_blank" href="https://calm-semifreddo-77a271.netlify.app/">
            <div className="shadow-md shadow-slate-800 h-full">
              <Image
                src={restaurant}
                className="object-cover w-full"
                alt="project"
              />
              <div className="p-4">
                <h4 className="font-bold tracking-wide">Restaurant Website</h4>
                <p>A tasty and eye-catchy website for your restaurant.</p>
              </div>
            </div>
          </a>
        </Hoc> */}

        {/* <Hoc>
          <a
            target="_blank"
            href="https://loquacious-mochi-5aa671.netlify.app/"
          >
            <div className="shadow-md shadow-slate-800 h-full">
              <Image src={rhm} className="object-cover w-full" alt="project" />
              <div className="p-4">
                <h4 className="font-bold tracking-wide">
                  Christian Community Website
                </h4>
                <p>A stunning and responsive website for communities.</p>
              </div>
            </div>
          </a>
        </Hoc> */}

        {/* <Hoc>
          <a
            target="_blank"
            href="https://phenomenal-cannoli-d81bdf.netlify.app/"
          >
            <div className="shadow-md shadow-slate-800 h-full">
              <Image src={todo} className="object-cover w-full" alt="project" />
              <div className="p-4">
                <h4 className="font-bold tracking-wide">Todo App</h4>
                <p>
                A fundamental project in every developer&apos;s journey. This one is dear to my heart as it was built to organize my messy life. You can organize yours too with it.
                </p>
              </div>
            </div>
          </a>
        </Hoc> */}
      </div>
    </section>
  );
};

export default Projects;
