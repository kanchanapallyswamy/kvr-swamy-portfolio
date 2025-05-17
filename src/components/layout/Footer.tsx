
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolio-dark text-white py-16">
      <div className="container-section py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">KVRSWAMY</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              A passionate developer focused on Data Structures & Algorithms and backend development with Java.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/kanchanapallyswamy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-orange transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/swamy-kanchanapally"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-orange transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:kanchanapallyswamy@gmail.com"
                className="hover:text-portfolio-orange transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-portfolio-orange transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-portfolio-orange transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-portfolio-orange transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-portfolio-orange transition-colors">Skills</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>kanchanapallyswamy@gmail.com</li>
                <li>+91 9640074089</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} KVRSWAMY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
