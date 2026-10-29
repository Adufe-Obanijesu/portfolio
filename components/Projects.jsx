import { useRef } from "react";
import Image from "next/image";
import Hoc from "./Hoc";
import { coreProjects, creativeProjects } from "../data/projects";
import {
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
} from "react-icons/fi";
import { useImageModal } from "./ImageModal";

const MockupStrip = ({ mockups, onSelect }) => {
  const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[#0d0d0d] border-b border-slate-700 w-full max-w-full min-w-0 overflow-hidden">
      {/* Top utility bar for the mockup strip */}
      <div className="flex items-center justify-between px-6 pt-4 pb-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          App Screens (Click any screen to expand · Scroll for more)
        </span>
        <div className="flex items-center gap-1.5 z-20">
          <button
            type="button"
            onClick={() => scrollByAmount(-360)}
            className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            aria-label="Scroll left"
          >
            <FiChevronLeft className="text-sm" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(360)}
            className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            aria-label="Scroll right"
          >
            <FiChevronRight className="text-sm" />
          </button>
        </div>
      </div>

      {/* Scrollable Mockups Container */}
      <div
        ref={scrollRef}
        className="flex items-end gap-7 overflow-x-auto w-full max-w-full min-w-0 px-6 pt-3 pb-7 scroll-smooth no-scrollbar"
      >
        {mockups.map((item, idx) => {
          if (item.type === "phone") {
            return (
              <div
                key={idx}
                onClick={() => onSelect(mockups, idx)}
                className="shrink-0 group cursor-pointer flex flex-col items-center"
                title={`Click to view full screen: ${item.caption}`}
              >
                {/* Flat Phone Mockup Chassis */}
                <div className="w-[136px] sm:w-[152px] bg-slate-950 border-2 border-slate-700 group-hover:border-blue-400 rounded-[18px] p-1.5 transition-colors">
                  {/* Speaker notch */}
                  <div className="w-8 h-1 bg-slate-800 rounded-full mx-auto mb-1.5" />
                  {/* Phone Screen */}
                  <div className="relative rounded-[12px] overflow-hidden bg-black aspect-[456/1024]">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      width={item.width}
                      height={item.height}
                      className="w-full h-full object-cover block"
                    />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 border border-slate-700 text-white p-2 rounded">
                        <FiMaximize2 className="text-xs" />
                      </span>
                    </div>
                  </div>
                  {/* Bottom bar */}
                  <div className="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-1.5" />
                </div>
                {/* <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-200 mt-2.5">
                  {item.caption.replace("Oasis ", "")}
                </span> */}
              </div>
            );
          }

          return (
            <div
              key={idx}
              onClick={() => onSelect(mockups, idx)}
              className="shrink-0 group cursor-pointer flex flex-col items-center"
              title={`Click to view full screen: ${item.caption}`}
            >
              {/* Flat Laptop Mockup Chassis */}
              <div className="w-[340px] sm:w-[440px] px-2">
                <div className="bg-slate-950 border-2 border-slate-700 group-hover:border-blue-400 rounded-t-lg p-2 pb-1.5 transition-colors">
                  {/* Webcam dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mx-auto mb-1.5" />
                  {/* Laptop Screen */}
                  <div className="relative rounded-sm overflow-hidden bg-black border border-slate-800 aspect-[1024/527]">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      width={item.width}
                      height={item.height}
                      className="w-full h-full object-cover block"
                    />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 border border-slate-700 text-white p-2.5 rounded">
                        <FiMaximize2 className="text-sm" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* Laptop Base Lip */}
                <div className="h-3 bg-slate-700 group-hover:bg-blue-400/80 rounded-b-md -mx-2 flex justify-center items-start transition-colors">
                  <div className="w-14 h-1 bg-slate-800 rounded-b-sm" />
                </div>
              </div>
              <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-200 mt-2.5">
                {item.caption.replace("Oasis ", "")}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right Edge Fade Into Overflow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-slate-900 via-slate-900/70 to-transparent z-10" />
    </div>
  );
};

const Projects = () => {
  const { openImage } = useImageModal();

  return (
    <section
      id="projects"
      className="lg:py-16 py-10 border-b border-slate-800 min-w-0 max-w-full overflow-hidden"
    >
      <Hoc>
        <p className="smallHeading">portfolio</p>
      </Hoc>

      <Hoc>
        <h2 className="heading">featured projects</h2>
      </Hoc>

      <Hoc>
        <p className="mt-8">
          Full-stack platforms and high-fidelity creative web recreations.
        </p>
      </Hoc>

      {/* CATEGORY 1: CORE APPLICATIONS & PLATFORMS */}
      <div className="mt-10">
        <Hoc>
          <div className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              01 / Core Applications &amp; Platforms
            </h3>
          </div>
        </Hoc>

        <div className="space-y-8 min-w-0 max-w-full">
          {coreProjects.map((project) => (
            <Hoc key={project.id}>
              <article className="bg-slate-800 border border-slate-700 rounded overflow-hidden w-full max-w-full min-w-0">
                {/* Flat Header Strip */}
                <div className="bg-slate-900/50 border-b border-slate-700 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h4 className="text-2xl font-bold text-white">
                      {project.title}
                    </h4>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {project.role} · {project.timeline}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.status && (
                      <span className="px-2.5 py-1 rounded text-xs font-semibold bg-blue-600 text-white">
                        {project.status}
                      </span>
                    )}
                    {project.badge && (
                      <span className="px-2.5 py-1 rounded text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Top Multi-Device Mockup Strip (Oasis) */}
                {project.mockups && project.mockups.length > 0 && (
                  <MockupStrip
                    mockups={project.mockups}
                    onSelect={(items, idx) => openImage(items, idx)}
                  />
                )}

                {/* Body Content */}
                <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-start">
                  <div
                    className={
                      project.img && !project.mockups
                        ? "lg:col-span-7"
                        : "lg:col-span-12"
                    }
                  >
                    <p className="text-base text-slate-200 font-medium leading-relaxed mb-6">
                      {project.headline}
                    </p>

                    <ul className="space-y-2.5 mb-6 border-l-2 border-slate-700 pl-4">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-300 leading-relaxed"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-700">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((techName, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-700"
                          >
                            {techName}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Single Image Showcase (e.g. Mavis Beacon) */}
                  {project.img && !project.mockups && (
                    <div className="lg:col-span-5">
                      <div
                        onClick={() =>
                          openImage({
                            src: project.img,
                            alt: project.alt || project.title,
                            caption: project.title,
                          })
                        }
                        className="relative group cursor-pointer rounded overflow-hidden border border-slate-700 hover:border-blue-400 bg-slate-900 transition-colors"
                        title="Click to view full image"
                      >
                        <Image
                          src={project.img}
                          alt={project.alt || project.title}
                          className="w-full h-auto block object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 border border-slate-700 text-white p-2.5 rounded">
                            <FiMaximize2 className="text-sm" />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </Hoc>
          ))}
        </div>
      </div>

      {/* CATEGORY 2: CREATIVE & ANIMATED WEB PROJECTS */}
      <div className="mt-16">
        <Hoc>
          <div className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              02 / Creative &amp; Animated Web Projects
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Landing-page recreations of award-winning sites focused on smooth
              GSAP choreography and responsive layouts.
            </p>
          </div>
        </Hoc>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {creativeProjects.map((project, i) => (
            <Hoc key={i}>
              <article className="bg-slate-800 border border-slate-700 hover:border-slate-500 rounded overflow-hidden flex flex-col justify-between transition-colors duration-150 h-full">
                <div>
                  <div
                    onClick={() =>
                      openImage(
                        creativeProjects.map((p) => ({
                          src: p.img,
                          alt: p.alt,
                          caption: p.title,
                          link: p.originalUrl,
                        })),
                        i,
                      )
                    }
                    className="relative group cursor-pointer aspect-video border-b border-slate-700 overflow-hidden bg-slate-900"
                    title="Click to view full image"
                  >
                    <Image
                      src={project.img}
                      alt={project.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 border border-slate-700 text-white p-2.5 rounded">
                        <FiMaximize2 className="text-sm" />
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h4 className="font-bold text-lg text-white">
                        {project.title}
                      </h4>
                    </div>

                    <a
                      href={project.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 mb-3"
                    >
                      <span>Recreation of {project.originalLabel}</span>
                      <FiExternalLink className="text-xs" />
                    </a>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Hoc>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
