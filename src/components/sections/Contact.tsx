
import { Linkedin, Mail, Phone, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="text-center text-portfolio-gray max-w-2xl mx-auto mb-12 text-lg">
          Feel free to reach out for opportunities, collaborations, or just to say hello!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-portfolio-lightBlue rounded-lg">
                  <Mail className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-portfolio-dark mb-1">Email</h3>
                  <a
                    href="mailto:kanchanapallyswamy@gmail.com"
                    className="text-portfolio-gray hover:text-portfolio-blue transition-colors"
                  >
                    kanchanapallyswamy@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-portfolio-lightBlue rounded-lg">
                  <Phone className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-portfolio-dark mb-1">Phone</h3>
                  <a
                    href="tel:+919640074089"
                    className="text-portfolio-gray hover:text-portfolio-blue transition-colors"
                  >
                    +91 9640074089
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-portfolio-lightBlue rounded-lg">
                  <Linkedin className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-portfolio-dark mb-1">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/swamy-kanchanapally"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-gray hover:text-portfolio-blue transition-colors"
                  >
                    linkedin.com/in/swamy-kanchanapally
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-portfolio-lightBlue rounded-lg">
                  <Github className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-portfolio-dark mb-1">GitHub</h3>
                  <a
                    href="https://github.com/kanchanapallyswamy"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-gray hover:text-portfolio-blue transition-colors"
                  >
                    github.com/kanchanapallyswamy
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <form className="card p-8 shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-portfolio-lightGray focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-dark mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-portfolio-lightGray focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-portfolio-lightGray focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
