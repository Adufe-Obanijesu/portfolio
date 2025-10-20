import Image from "next/image";

// animate in view component
import Hoc from "./Hoc";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="lg:py-16 py-10">
      <Hoc>
        <p className="smallHeading">my projects</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">recent projects</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-12 mt-10">
          These are some of the side projects I have worked on.
        </p>
      </Hoc>

      <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 mt-8">
        {projects.map(({ link, img, alt, title, description }, i) => (
          <Hoc key={i}>
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <div className="shadow-md shadow-slate-800 h-full flex flex-col">
                <Image src={img} className="object-cover w-full" alt={alt} />
                <div className="p-4 flex flex-col justify-between grow">
                  <div>
                    <h4 className="font-bold tracking-wide">{title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </a>
          </Hoc>
        ))}
      </div>
    </section>
  );
};

export default Projects;
