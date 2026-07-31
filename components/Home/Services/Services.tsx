import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16 ">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        I build fast, modern websites <br /> that help businesses grow, <br />
         available for freelance projects worldwide
        </h1>
        <div className="w-[90%] sm:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 
        lg:gap-14 mt-20 items-center">
            <div data-aos= "fade-right" data-aos-anchor-placement= "top-center">
               <ServiceCard icon= "/images/s1.png" 
               name="UI and UX" 
               description="Designing interfaces that are intuitive, efficient, and enjoyable to use"/> 
            </div>

            <div data-aos= "fade-right" data-aos-anchor-placement= "top-center" data-aos-delay= "100">
               <ServiceCard icon= "/images/s3.png" 
               name="Design & Creative" 
               description="Designing interfaces that are intuitive, efficient, and enjoyable to use"/> 
            </div>

            <div data-aos= "fade-right" data-aos-anchor-placement= "top-center" data-aos-delay= "100">
               <ServiceCard icon= "/images/s4.png" 
               name="Development" 
               description="I build complete web solutions.
             I work with modern stacks to deliver apps that are scalable, maintainable, 
             and ready for real-world users."/> 
            </div>
        </div>
    </div>
  )
}

export default Services;