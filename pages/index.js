"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

// css
// import "../styles/globals.css";

// components
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  return (
    <main className="lg:px-16 md:pr-20 grid lg:grid-cols-4 md:grid-cols-5 lg:gap-6 gap-4 relative bg-slate-900">
      <span
        className={`${
          isTouched == true ? "hidden" : "block md:hidden"
        } z-0 fixed left-10 top-5 animate-ping bg-gray-400 h-[10px] w-[10px] rounded-full`}
      ></span>
      <RxHamburgerMenu
        className="fixed text-slate-300 md:hidden text-4xl left-4 top-4 cursor-pointer z-20"
        onClick={() => {
          setShowSidebar(true);
          setIsTouched(true);
        }}
      />
      <div
        className={`h-screen w-screen bg-black opacity-40 blur-lg fixed z-10 ${
          showSidebar ? "block" : "hidden"
        }`}
        onClick={() => setShowSidebar(false)}
      ></div>
      <div className="md:hidden">
        {showSidebar && <Sidebar show={showSidebar} setShow={setShowSidebar} />}
      </div>
      <div className="hidden md:block">
        <Sidebar show={showSidebar} setShow={setShowSidebar} />
      </div>
      <div className="px-6 md:px-0 col-span-3 lg:col-start-2 md:col-start-3">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
