"use client";
import { SiExpress, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import Tilt from 'react-parallax-tilt';

const skills = [
    {
    name: "JavaScript",
    icon: <SiJavascript/>,
    percentage: 90,
},
    {
    name: "React JS",
    icon: <SiReact/>,
    percentage: 92,
},
 {
    name: "Next.JS",
    icon: <SiNextdotjs/>,
    percentage: 88,
},
   {
    name: "Node.JS",
    icon: <SiNodedotjs/>,
    percentage: 94,
},
   {
    name: "Tailwind CSS",
    icon: <SiTailwindcss/>,
    percentage: 87,
},
   {
    name: "TypeScript",
    icon: <SiTypescript/>,
    percentage: 91,
},
]

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
     <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
      My <span className="text-cyan-300">Skills</span> 
    </h1>
    <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skil,i)=>{
            return (
            <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
              <div 
              data-aos= "flip-right" data-aos-anchor-placement= "top-center" data-aos-delay= {i * 100}  
              className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center 
                justify-center shadow-lg transition hover:scale-105">
                  <div className="text-5xl mb-4 text-gray-300">{skil.icon}</div>
                  <p className="text-2xl font-semibold">{skil.percentage}%</p>
                  <p className="text-purple-400 mt-1">{skil.name}</p>  
                </div>
            </Tilt>
            );
        })}
    </div>
    </div>
  );
};

export default Skills;