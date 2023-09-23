import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// image
import profilePic from "../public/images/pixs.jpg";

const Sidebar = ({ show, setShow }) => {

    return (
        <aside className={`overflow-hidden bg-gray-100 px-12 py-10 h-full fixed ${show ? "block" : "hidden"} w-3/4 shadow md:shadow-none md:w-auto md:block z-20`}>

            <div className="flex justify-center">
                <Image src={profilePic} className="rounded-full lg:h-40 md:h-32 lg:w-40 md:w-32 object-cover" alt="Adufe Obanijesu" />
            </div>
            <div className="mt-8">
                <h3 className="text-2xl font-bold text-center mb-2 tracking-normal">Obanijesu Adufe</h3>
                <p className="text-sm text-blue-500 text-center">Full Stack Developer</p>
            </div>

            <div className="flex flex-col items-center mt-4 font-quicksand">
                <Link className="sidebarLink" onClick={() => setShow(false) } href="#">Home</Link>
                <Link className="sidebarLink" onClick={() => setShow(false) } href="#about">about</Link>
                <Link className="sidebarLink" onClick={() => setShow(false) } href="#skills">skills</Link>
                <Link className="sidebarLink" onClick={() => setShow(false) } href="#experience">experience</Link>
                <Link className="sidebarLink" onClick={() => setShow(false) } href="#work">work</Link>
                <Link className="sidebarLink" onClick={() => setShow(false) } href="#contact">contact</Link>
            </div>
        </aside>
    )
}

export default Sidebar;