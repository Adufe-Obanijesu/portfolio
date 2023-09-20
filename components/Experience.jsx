import { FaBriefcase } from "react-icons/fa";

// animate in view component
import Hoc from "./Hoc";

const Experience = () => {
	return (
		<section id="experience" className="md:py-16 py-10">
    	<Hoc><p className="smallHeading">experience</p></Hoc>
        
				<Hoc><h3 className="heading">work experience</h3></Hoc>
        
				<Hoc><p className="lg:mt-16 mt-10">
					Over the years, I have been privileged to be exposed to different fields - Engineering Firm, Social Enterprise, Agricultural Firm, Real Estate Firm etc. They have given me the real-world experience I needed. Listed here are a few and most impactful.
				</p></Hoc>

			<ol className="relative border-l border-gray-200 ml-4 mt-8">                  
			    <Hoc><li className="mb-10 ml-8">
			        <div className="absolute w-10 h-10 bg-blue-400 rounded-full mt-1.5 -left-5 border border-white flex justify-center items-center">
			        	<FaBriefcase className="text-white" />
			        </div>
			        <time className="mb-1 text-sm font-normal leading-none text-gray-400">August 2023 - Now</time>
			        <h3 className="font-quicksand tracking-wider text-xl font-bold text-gray-900">Frontend Developer @ Kadosh Mechatronics</h3>
			        <p className="mb-4 text-base font-normal text-gray-500">An Engineering Firm with the vision of weaving mechanical, electrical and computer engineering to craft cutting-edge solutions. I'm saddled with the responsibility of developing an accessible and interactive site using Next.js and TailwindCSS</p>
			    </li></Hoc>
			    <Hoc><li className="mb-10 ml-8">
			        <div className="absolute w-10 h-10 bg-blue-400 rounded-full mt-1.5 -left-5 border border-white flex justify-center items-center">
			        	<FaBriefcase className="text-white" />
			        </div>
			        <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2023 - August 2023</time>
			        <h3 className="font-quicksand tracking-wider text-xl font-bold text-gray-900">Frontend Developer Intern @ OFNL</h3>
			        <p className="text-base font-normal text-gray-500">An Agricultural Firm with the vision of re-engineering input supply, financing and marketing extension services using web and mobile applications. One of the major skills I gained was <strong>Collaboration</strong> and <strong>Teamwork</strong> and I was exposed to the Agile Project Management System.</p>
			    </li></Hoc>
			    <Hoc><li className="ml-8">
			        <div className="absolute w-10 h-10 bg-blue-400 rounded-full mt-1.5 -left-5 border border-white flex justify-center items-center">
			        	<FaBriefcase className="text-white" />
			        </div>
			        <time className="mb-1 text-sm font-normal leading-none text-gray-400">June 2020 - July 2023</time>
			        <h3 className="font-quicksand tracking-wider text-xl font-bold text-gray-900">Full Stack Developer @ WeVoteYou</h3>
			        <p className="text-base font-normal text-gray-500">It is a platform established to find lasting solutions to Online Paid Voting System, Event Ticketing, and Opinion Polls. I was contracted to develop and manage a 3 in 1 web application using React.JS, PHP and MySQL Database.</p>
			    </li></Hoc>
			</ol>

		</section>
	)
}

export default Experience;