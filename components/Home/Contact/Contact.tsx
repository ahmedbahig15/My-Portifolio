"use client";
import { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi"
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error();

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  } catch {
    setStatus("error");
  } finally {
    setTimeout(() => setStatus("idle"), 3000);
  }
};

  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 
    gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let's discuss how I can help you achive your goals
          </p>
          {/* INFO */}
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300"/>
              <p className="text-xl font-bold text-gray-400">+201060361607</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300"/>
              <p className="text-xl font-bold text-gray-400">ahmedbahig15@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300"/>
              <p className="text-xl font-bold text-gray-400">Egypt, Cairo</p>
            </div>
          </div>
          {/* Social icons */}
          <div className="flex items-center mt-8 space-x-3">
            <a href="https://www.facebook.com/ahmed.bahig.71" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center 
              cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
              <FaFacebookF className="text-white w-6 h-6"/>
            </a>

            <a href="https://www.instagram.com/_ahmedbahig"
              target="_blank"
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center 
              cursor-pointer flex-col hover:bg-pink-500 transition-all duration-300">
              <FaInstagram className="text-white w-6 h-6"/>
            </a>

            <a href="https://wa.me/201060361607?text=Hello%20Ahmed,%20I%20want%20to%20work%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center 
              cursor-pointer flex-col hover:bg-green-600 transition-all duration-300">
              <FaWhatsapp className="text-white w-6 h-6"/>
            </a>

            <a href="https://github.com/ahmedbahig15"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center 
              cursor-pointer flex-col hover:bg-black transition-all duration-300">
              <FaGithub className="text-white w-6 h-6"/>
            </a>
            
            <a href="https://www.linkedin.com/in/ahmed-yasser-197b65266/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center 
              cursor-pointer flex-col hover:bg-blue-600 transition-all duration-300">
              <FaLinkedin className="text-white w-6 h-6"/>
            </a>
          </div>
        </div>

        {/* form */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-40"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="mt-4 text-green-400">message sended successfully!</p>}
            {status === "error" && <p className="mt-4 text-red-400">there is an error, try again!</p>}
          </form>
        </div>
      </div>  
    </div>
  )
}

export default Contact;