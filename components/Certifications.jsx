import Hoc from "./Hoc";
import { certifications, education } from "../data/certifications";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="lg:py-16 py-10 border-b border-slate-800"
    >
      <Hoc>
        <p className="smallHeading">credentials</p>
      </Hoc>

      <Hoc>
        <h2 className="heading">certifications &amp; education</h2>
      </Hoc>

      {/* Certifications Grid */}
      <div className="mt-8">
        <Hoc>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-4">
            Certifications
          </h3>
        </Hoc>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Hoc key={index}>
              <div className="bg-slate-800 border border-slate-700 border-l-4 border-l-blue-500 rounded p-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    <span className="text-blue-400">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  <h4 className="font-bold text-sm text-white leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-700">
                  {cert.focus}
                </p>
              </div>
            </Hoc>
          ))}
        </div>
      </div>

      {/* Education Block */}
      <div className="mt-10">
        <Hoc>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-4">
            Education
          </h3>
        </Hoc>

        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <Hoc key={index}>
              <div className="bg-slate-800 border border-slate-700 border-l-4 border-l-slate-400 rounded p-5 h-full">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-bold text-base text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{edu.institution}</p>
                {edu.honors && (
                  <p className="text-xs text-blue-400 font-semibold mt-1.5">
                    {edu.honors}
                  </p>
                )}
              </div>
            </Hoc>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
