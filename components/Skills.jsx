import Hoc from "./Hoc";
import { skillCategories } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="lg:py-16 py-10 border-b border-slate-800">
      <Hoc>
        <p className="smallHeading">my specialty</p>
      </Hoc>

      <Hoc>
        <h2 className="heading">technical skills</h2>
      </Hoc>

      <Hoc>
        <p className="mt-8">
          Coding since 2017 and building professionally since 2021, I work with
          the following stack across frontend engineering, backend services, and
          embedded hardware:
        </p>
      </Hoc>

      <div className="mt-8 space-y-7">
        {skillCategories.map((category, catIdx) => (
          <Hoc key={catIdx}>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-3">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-3.5 py-3 rounded bg-slate-800 border border-slate-700 hover:border-blue-400 transition-colors duration-150"
                  >
                    {skill.icon}
                    <span className="font-semibold text-xs sm:text-sm text-slate-200 truncate">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Hoc>
        ))}
      </div>
    </section>
  );
};

export default Skills;
