import Link from "next/link";
import Hoc from "./Hoc";
import { contacts } from "../data/contacts";
import { FiDownload } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="lg:py-16 py-10">
      <Hoc>
        <p className="smallHeading">get in touch</p>
      </Hoc>

      <Hoc>
        <h2 className="heading">contact</h2>
      </Hoc>

      <Hoc>
        <p className="mt-8">
          Open to frontend roles, collaborative product engineering, and
          technical inquiries. Reach out directly through any of the channels
          below:
        </p>
      </Hoc>

      <div className="mt-8">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
          {contacts.map(({ href, icon: Icon, iconColor, text }, i) => (
            <Hoc key={i}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center p-4 rounded bg-slate-800 border border-slate-700 hover:border-blue-400 transition-colors duration-150"
              >
                <span className="bg-slate-900 border border-slate-700 rounded h-12 w-12 flex justify-center items-center shrink-0">
                  <Icon className={`text-2xl ${iconColor}`} />
                </span>
                <span className="text-slate-200 hover:text-white text-sm sm:text-base font-semibold break-all">
                  {text}
                </span>
              </Link>
            </Hoc>
          ))}
        </div>

        {/* Flat Resume Callout Block */}
        <Hoc>
          <div className="mt-8 p-6 rounded bg-slate-800 border border-slate-700 border-l-4 border-l-blue-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white">
                Need a copy of my resume?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Download the full PDF with experience, technical skills, and
                project details.
              </p>
            </div>
            <a
              href="/pdf/Obanijesu Adufe - Resume.pdf"
              download="Obanijesu Adufe - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <FiDownload className="text-base" />
              Download Resume (PDF)
            </a>
          </div>
        </Hoc>
      </div>
    </section>
  );
};

export default Contact;
