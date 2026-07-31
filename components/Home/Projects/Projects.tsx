import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Devolio",
    description: "CreatedBy html5, css3",
    image: "/images/p1.jpg",
    url: "https://assignment1-devfolio.vercel.app/",
  },
  {
    id: 2,
    title: "BookMarker",
    description: "CreatedBy html5-css3-javascript",
    image: "/images/p2.jpg",
    url: "https://bookmarker-eight-sandy.vercel.app/",
  },
  {
    id: 3,
    title: "Start-Frame-Work",
    description: "CreatedBy html5-css3",
    image: "/images/p3.jpg",
    url: "https://react-start-framework-three.vercel.app/"
  },
  {
    id: 4,
    title: "Social-App",
    description: "CreatedBy (React-vite-javascript-css3-html5)",
    image: "/images/p4.jpg",
    url: "https://social-app-nu-nine.vercel.app/"
  },
   {
    id: 5,
    title: "Weather-App",
    description: "CreatedBy html5-css3-javascript",
    image: "/images/p5.jpg",
    url: "https://weather-app-liart-nu-19.vercel.app/"
  }
];

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>

      <div className="w-[85%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {projectsData.map((project) => (
          /* 2️⃣ غلفنا الكارت بالـ Link */
          <Link
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-cyan-950/40 p-5 rounded-2xl border border-cyan-800/40 hover:border-cyan-400 hover:scale-[1.02] transition-all duration-300 block cursor-pointer"
          >
            {/* تصميم صورة المشروع */}
            <div data-aos= "zoom-out" data-aos-anchor-placement= "top-center" className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="10"
                className="object-cover"
              />
            </div>

            {/* عنوان المشروع */}
            <h2 className="text-white text-xl font-bold">{project.title}</h2>
            <h2 className="text-white/80 pt-2 font-medium">{project.description}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects