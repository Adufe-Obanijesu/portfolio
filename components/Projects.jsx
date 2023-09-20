import Image from "next/image";
import { FaEye } from "react-icons/fa";

// images
import kadosh from "../public/images/kadosh.png";
import hotel from "../public/images/hotel.png";
import restaurant from "../public/images/restaurant.png";
import rhm from "../public/images/rhm.png";
import todo from "../public/images/todo.png";

// animate in view component
import Hoc from "./Hoc";

const Projects = () => {
	return (
		<section id="work" className="py-16">
        <Hoc><p className="smallHeading">my work</p></Hoc>
        
        <Hoc><h3 className="heading">recent work</h3></Hoc>
        
        <Hoc><p className="lg:mt-16 mt-10">
        	I have worked on several projects, of which I can not list all, but here are some of my best.
        </p></Hoc>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
        	
        	<Hoc><div className="shadow-md h-full flex flex-col">
        		<Image src={kadosh} className="object-cover border-b w-full" alt="project" />
        		<div className="p-4 flex flex-col justify-between grow">
                    <div>
            			<h4 className="font-bold tracking-wide">Kadosh Mechatronics</h4>
            			<p>
            				Weaving together mechanical, electrical, and computer engineering to craft cutting-edge solutions
            			</p>
                    </div>
        			<a target="_blank" href="https://www.kadoshmechatronics.com"><button className="bg-blue-500 border-2 border-blue-500 hover:bg-transparent rounded-md py-1 px-6 text-white hover:text-blue-500 mt-2">View <FaEye className="inline text-inherit" /></button></a>
        		</div>
        	</div></Hoc>

        	<Hoc><div className="shadow-md">
        		<Image src={hotel} className="object-cover border-b w-full" alt="project" />
        		<div className="p-4">
        			<h4 className="font-bold tracking-wide">Hotel Website</h4>
        			<p>
        				Catch the attention of your guests, travelers or tourists with this stunning and professional looking website.
        			</p>
        			<a target="_blank" href="https://cheerful-wisp-6f1261.netlify.app/"><button className="bg-blue-500 border-2 border-blue-500 hover:bg-transparent rounded-md py-1 px-6 text-white hover:text-blue-500 mt-2">View <FaEye className="inline text-inherit" /></button></a>
        		</div>
        	</div></Hoc>

        	<Hoc><div className="shadow-md">
        		<Image src={restaurant} className="object-cover border-b w-full" alt="project" />
        		<div className="p-4">
        			<h4 className="font-bold tracking-wide">Restaurant Website</h4>
        			<p>
        				A tasty and eye-catchy website for your restaurant.
        			</p>
        			<a target="_blank" href="https://calm-semifreddo-77a271.netlify.app/"><button className="bg-blue-500 border-2 border-blue-500 hover:bg-transparent rounded-md py-1 px-6 text-white hover:text-blue-500 mt-2">View <FaEye className="inline text-inherit" /></button></a>
        		</div>
        	</div></Hoc>

        	<Hoc><div className="shadow-md">
        		<Image src={rhm} className="object-cover border-b w-full" alt="project" />
        		<div className="p-4">
        			<h4 className="font-bold tracking-wide">Christian Community Website</h4>
        			<p>
        				A stunning and responsive website for communities.
        			</p>
        			<a target="_blank" href="https://loquacious-mochi-5aa671.netlify.app/"><button className="bg-blue-500 border-2 border-blue-500 hover:bg-transparent rounded-md py-1 px-6 text-white hover:text-blue-500 mt-2">View <FaEye className="inline text-inherit" /></button></a>
        		</div>
        	</div></Hoc>

            <Hoc><div className="shadow-md">
                <Image src={todo} className="object-cover border-b w-full" alt="project" />
                <div className="p-4">
                    <h4 className="font-bold tracking-wide">Todo App</h4>
                    <p>
                        This one is dear to my heart as it was built to organize my messy life. You can organize yours too with it.
                    </p>
                    <a target="_blank" href="https://phenomenal-cannoli-d81bdf.netlify.app/"><button className="bg-blue-500 border-2 border-blue-500 hover:bg-transparent rounded-md py-1 px-6 text-white hover:text-blue-500 mt-2">View <FaEye className="inline text-inherit" /></button></a>
                </div>
            </div></Hoc>

        </div>

		</section>
	)
}

export default Projects;