// animate in view component
import Hoc from "./Hoc";
import { IoCalendarSharp } from "react-icons/io5";
import { experiences } from "../data/experiences";
import Link from "next/link";
import Image from "next/image";

const Experience = () => {
  return (
    <section id="experience" className="lg:py-16 py-10">
      <Hoc>
        <p className="smallHeading">experience</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">work experience</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-12 mt-10">
          Throughout my career, I&apos;ve had the privilege of working with a
          variety of companies in different fields, including fintech,
          mechatronics lab, media, and agriculture. These experiences have given
          me the real-world experience I needed to become a well-rounded web
          developer. Here are some of the most impactful companies I&apos;ve
          worked with.
        </p>
      </Hoc>

      <ol className="relative border-l border-slate-400 ml-4 mt-8">
        {experiences.map(
          ({ date, title, description, icon: Icon, images }, i) => (
            <Hoc key={i}>
              <li className="py-2 px-2 rounded-lg hover:bg-slate-800/50 transitionItem mb-6 ml-6">
                <div className="absolute w-10 h-10 bg-blue-500 rounded-full mt-1.5 -left-5 border border-slate-200 flex justify-center items-center">
                  <Icon className="text-slate-100" />
                </div>
                <time className="mb-1 text-sm font-medium leading-none text-slate-400">
                  {date}
                </time>
                <h3 className="font-quicksand tracking-wider text-xl font-bold text-slate-400">
                  {title}
                </h3>
                <div className="text-base font-semibold text-slate-400">
                  {description}
                </div>
                <div className="flex flex-col md:flex-row mt-4 gap-4">
                  {images?.map(({ name, src, link, width, height }) => {
                    if (link) {
                      return (
                        <Link
                          key={name}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`rounded-md ${
                            images.length > 1
                              ? "md:w-1/2 w-full shrink-0"
                              : "w-full md:w-2/3"
                          }`}
                        >
                          <Image
                            src={src}
                            alt={name}
                            width={width}
                            height={height}
                            className={`rounded-md`}
                          />
                        </Link>
                      );
                    }

                    return (
                      <Image
                        key={name}
                        src={src}
                        alt={name}
                        width={width}
                        height={height}
                        className={`rounded-md ${
                          images.length > 1
                            ? "md:w-1/2 w-full shrink-0"
                            : "w-full md:w-2/3"
                        }`}
                      />
                    );
                  })}
                </div>
              </li>
            </Hoc>
          )
        )}
      </ol>
    </section>
  );
};

export default Experience;
