import { FaCodepen, FaReact } from "react-icons/fa"
import ResumeCard from "./ResumeCard"
import { BsDatabase } from "react-icons/bs"
import { BiBadge } from "react-icons/bi"

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
    <div className="w-[90%] sm:w-[70%] max-w-2xl mx-auto flex flex-col items-center">
        {/* Education part */}
        <div className="w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
            </h1>
             <div className="mt-10 space-y-6 w-full" data-aos= "zoom-in" data-aos-anchor-placement= "top-center">  
              <ResumeCard Icon={BiBadge} role="Modern Academy" date="Sept 2020 - Dec 2024" 
            description="Management Information Systems (MIS) Programming Major Graduation: 2024"/>  
              <ResumeCard Icon={BsDatabase} role="Nermine Ismail Schools" date="2005 - 2019" description="High School Diploma"/>  
            </div>
        </div>
    </div>
    </div>
  )
}

export default Resume;