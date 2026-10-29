import Image from "next/image";
import Hoc from "./Hoc";
import { coreProjects, creativeProjects } from "../data/projects";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="lg:py-16 py-10 border-b border-slate-800">
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

        <div className="space-y-8">
          {coreProjects.map((project) => (
            <Hoc key={project.id}>
              <article className="bg-slate-800 border border-slate-700 rounded overflow-hidden">
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

                {/* Body Content */}
                <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-start">
                  <div
                    className={
                      project.video || project.img
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

                  {/* Video Showcase */}
                  {project.video && (
                    <div className="lg:col-span-5">
                      <div className="rounded overflow-hidden border border-slate-700 bg-slate-900">
                        <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono font-semibold">
                            Interactive Demo
                          </span>
                        </div>
                        <video
                          src={project.video}
                          poster={project.poster}
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls
                          className="w-full h-auto block object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Image Showcase (for Mavis Beacon etc.) */}
                  {!project.video && project.img && (
                    <div className="lg:col-span-5">
                      <div className="rounded overflow-hidden border border-slate-700 bg-slate-900">
                        <Image
                          src={project.img}
                          alt={project.alt || project.title}
                          className="w-full h-auto block object-cover"
                        />
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
                  <div className="aspect-video border-b border-slate-700 overflow-hidden bg-slate-900">
                    <Image
                      src={project.img}
                      alt={project.alt}
                      className="w-full h-full object-cover"
                    />
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
