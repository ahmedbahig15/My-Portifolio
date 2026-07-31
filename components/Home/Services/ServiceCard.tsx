import Image from "next/image";

type Props = {
    icon:string;
    name: string;
    description: string;
}

const ServiceCard = ({icon,name,description}:Props) => {
  return (
    <div>
     <Image src={icon} alt="img" width={60} height={60}/>
     <h1 className="mt-8 text-xl md:text-3xl font-bold text-gray-200">{name}</h1>
     <p className="mt-8 text-gray-300">{description}</p>
    </div>
  )
}

export default ServiceCard