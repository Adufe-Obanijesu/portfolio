import Image from "next/image";
import { FaEye } from "react-icons/fa";

// images
import kadosh from "../public/images/kadosh.jpg";
import dictionary from "../public/images/dictionary.png";
import hotel from "../public/images/hotel.jpg";
import restaurant from "../public/images/restaurant.jpg";
import rhm from "../public/images/rhm.jpg";
import todo from "../public/images/todo.jpg";

// animate in view component
import Hoc from "./Hoc";

const Projects = () => {
  return (
    <section id="work" className="py-16">
      <Hoc>
        <p className="smallHeading">my projects</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">recent projects</h3>
      </Hoc>

      <Hoc>
        <p className="lg:mt-16 mt-10">
        I have experience working on multiple projects, some of which I have highlighted below.
        </p>
      </Hoc>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
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
                    Weaving together mechanical, electrical, and computer
                    engineering to craft cutting-edge solutions
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
                    Came across a word while reading and you just don&quot;t know what it means or how it fits into the story? Well you can always look it up with this simple, yet stunning web app.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Hoc>

        <Hoc>
          <a target="_blank" href="https://cheerful-wisp-6f1261.netlify.app/">
            <div className="shadow-md shadow-slate-800">
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

        <Hoc>
          <a target="_blank" href="https://calm-semifreddo-77a271.netlify.app/">
            <div className="shadow-md shadow-slate-800">
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
        </Hoc>

        <Hoc>
          <a
            target="_blank"
            href="https://loquacious-mochi-5aa671.netlify.app/"
          >
            <div className="shadow-md shadow-slate-800">
              <Image src={rhm} className="object-cover w-full" alt="project" />
              <div className="p-4">
                <h4 className="font-bold tracking-wide">
                  Christian Community Website
                </h4>
                <p>A stunning and responsive website for communities.</p>
              </div>
            </div>
          </a>
        </Hoc>

        <Hoc>
          <a
            target="_blank"
            href="https://phenomenal-cannoli-d81bdf.netlify.app/"
          >
            <div className="shadow-md shadow-slate-800">
              <Image src={todo} className="object-cover w-full" alt="project" />
              <div className="p-4">
                <h4 className="font-bold tracking-wide">Todo App</h4>
                <p>
                  This one is dear to my heart as it was built to organize my
                  messy life. You can organize yours too with it.
                </p>
              </div>
            </div>
          </a>
        </Hoc>
      </div>
    </section>
  );
};

export default Projects;
