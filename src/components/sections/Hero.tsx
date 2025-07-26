
import { Github, Linkedin, Download } from "lucide-react";
import profilePlaceholder from "/placeholder.svg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-portfolio-light via-portfolio-light to-portfolio-lightBlue/20">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block">
              <span className="bg-portfolio-blue/10 text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Software Developer
              </span>
            </div>
            
            <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl">
              Hi, I'm <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-darkBlue bg-clip-text text-transparent">KVRSWAMY</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-portfolio-gray font-light leading-relaxed max-w-lg">
              A passionate developer focused on Data Structures & Algorithms and backend development with Java.
            </p>
            
            <div className="animate-bounce inline-block py-1">
              <div className="flex items-center gap-2 text-portfolio-orange font-medium text-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-portfolio-orange"></span>
                </span>
                Let's build efficient systems together!
              </div>
            </div>
            
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button 
                variant="default"
                className="bg-portfolio-orange hover:bg-portfolio-darkBlue transition-all duration-300 shadow-lg hover:shadow-portfolio-blue/20 hover:-translate-y-1"
                asChild
              >
                <a href="https://drive.google.com/uc?export=download&id=1KMeUav07FP31BLN3ZoQNnGCLOxPc1obj" target="_blank" rel="noopener noreferrer">
                  <Download size={18} className="mr-1" /> Download Resume
                </a>
              </Button>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/kanchanapallyswamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-portfolio-blue hover:text-white text-portfolio-dark p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/swamy-kanchanapally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-portfolio-blue hover:text-white text-portfolio-dark p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-blue via-portfolio-orange to-portfolio-blue rounded-full opacity-70 blur-lg animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-white to-portfolio-lightBlue rounded-full overflow-hidden border-4 border-white h-64 w-64 md:h-80 md:w-80 shadow-2xl">
                <img
                  src={profilePlaceholder}
                  alt="KVRSWAMY"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                 <div className="bg-portfolio-orange h-16 w-16 rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse">
                   700+
                   <span className="text-xs absolute bottom-2.5">Problems</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
