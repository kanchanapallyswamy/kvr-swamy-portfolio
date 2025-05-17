
import { Github, Linkedin, Download } from "lucide-react";
import profilePlaceholder from "/placeholder.svg";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-portfolio-lightBlue to-white">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl mb-4">
              Hi, I'm <span className="text-portfolio-blue">KVRSWAMY</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-portfolio-gray font-light">
              A passionate developer focused on Data Structures & Algorithms and backend development with Java.
            </p>
            <div className="animate-bounce inline-block mb-8">
              <p className="text-portfolio-orange font-medium text-lg">
                Let's build efficient systems together!
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/resume.pdf" 
                className="btn-primary flex items-center gap-2"
                download
              >
                <Download size={18} /> Download Resume
              </a>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://github.com/kanchanapallyswamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-portfolio-dark hover:bg-portfolio-blue text-white p-2 rounded-full transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/swamy-kanchanapally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-portfolio-dark hover:bg-portfolio-blue text-white p-2 rounded-full transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-portfolio-blue to-portfolio-orange opacity-75 blur"></div>
              <div className="relative bg-white rounded-full overflow-hidden border-4 border-white h-64 w-64 md:h-80 md:w-80 shadow-xl">
                <img
                  src={profilePlaceholder}
                  alt="KVRSWAMY"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
