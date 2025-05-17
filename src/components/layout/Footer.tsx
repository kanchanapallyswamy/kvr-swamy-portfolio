
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-darkBlue text-white py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-blue/10 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-blue/5 rounded-full blur-3xl opacity-10"></div>
      
      <div className="container-section py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-3xl font-bold text-white">KVR<span className="text-portfolio-orange">SWAMY</span></span>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              A passionate developer focused on Data Structures & Algorithms and backend development with Java.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/kanchanapallyswamy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/swamy-kanchanapally"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kanchanapallyswamy@gmail.com"
                className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-portfolio-orange transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-portfolio-orange transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-portfolio-orange transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-portfolio-orange transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-portfolio-orange transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3">
                <li className="text-gray-300">kanchanapallyswamy@gmail.com</li>
                <li className="text-gray-300">+91 9640074089</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {currentYear} KVRSWAMY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
