// animate in view component
import Hoc from "./Hoc";
import { experiences } from "../data/experiences";
import Image from "next/image";
import { FiMaximize2, FiExternalLink } from "react-icons/fi";
import { useImageModal } from "./ImageModal";

const Experience = () => {
  const { openImage } = useImageModal();

  return (
    <section
      id="experience"
      className="lg:py-16 py-10 border-b border-slate-800"
    >
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
                    {images.map(({ name, src, link, width, height }, imgIdx) => (
                      <div
                        key={name}
                        className={
                          images.length > 1
                            ? "md:w-1/2 w-full shrink-0"
                            : "w-full md:w-2/3"
                        }
                      >
                        <div
                          onClick={() =>
                            openImage(
                              images.map((item) => ({
                                src: item.src,
                                alt: item.name,
                                caption: item.name,
                                link: item.link,
                              })),
                              imgIdx,
                            )
                          }
                          className="relative group cursor-pointer rounded border border-slate-700 hover:border-blue-400 overflow-hidden transition-colors duration-150 bg-slate-900"
                          title={`Click to view full image: ${name}`}
                        >
                          <Image
                            src={src}
                            alt={name}
                            width={width}
                            height={height}
                            className="w-full h-auto block"
                          />
                          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 border border-slate-700 text-white p-2.5 rounded">
                              <FiMaximize2 className="text-sm" />
                            </span>
                          </div>
                        </div>

                        {link && (
                          <div className="mt-1.5 flex justify-end">
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300"
                            >
                              <span>Visit {name}</span>
                              <FiExternalLink className="text-xs" />
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
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
