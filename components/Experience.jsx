// animate in view component
import Hoc from "./Hoc";
import { experiences } from "../data/experiences";
import Link from "next/link";
import Image from "next/image";

const Experience = () => {
  return (
    <section id="experience" className="lg:py-16 py-10 border-b border-slate-800">
      <Hoc>
        <p className="smallHeading">experience</p>
      </Hoc>

      <Hoc>
        <h2 className="heading">work experience</h2>
      </Hoc>

      <Hoc>
        <p className="mt-8">
          Throughout my career, I&apos;ve built software across fintech,
          mechatronics, media, and agriculture—shipping production dashboards,
          embedded interfaces, and high-traffic event platforms.
        </p>
      </Hoc>

      <ol className="relative border-l-2 border-slate-700 ml-3 mt-10 space-y-6">
        {experiences.map(
          ({ date, title, location, description, icon: Icon, images }, i) => (
            <Hoc key={i}>
              <li className="ml-6 bg-slate-800 border border-slate-700 rounded p-6">
                <div className="absolute w-8 h-8 bg-slate-800 border-2 border-blue-500 rounded -left-[17px] mt-1 flex justify-center items-center">
                  <Icon className="text-blue-400 text-xs" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-700">
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <span>{date}</span>
                    {location && <span> · {location}</span>}
                  </div>
                </div>

                <div className="text-sm leading-7 text-slate-300 font-normal">
                  {description}
                </div>

                {images && images.length > 0 && (
                  <div className="flex flex-col md:flex-row mt-5 gap-4">
                    {images.map(({ name, src, link, width, height }) => {
                      if (link) {
                        return (
                          <Link
                            key={name}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`rounded border border-slate-700 hover:border-blue-400 overflow-hidden transition-colors duration-150 ${
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
                              className="w-full h-auto block"
                            />
                          </Link>
                        );
                      }

                      return (
                        <div
                          key={name}
                          className={`rounded border border-slate-700 overflow-hidden ${
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
                            className="w-full h-auto block"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </li>
            </Hoc>
          ),
        )}
      </ol>
    </section>
  );
};

export default Experience;
