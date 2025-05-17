
import { useState } from 'react';
import { Linkedin, Mail, Phone, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="text-portfolio-blue" size={24} />,
      title: "Email",
      value: "kanchanapallyswamy@gmail.com",
      link: "mailto:kanchanapallyswamy@gmail.com",
    },
    {
      id: 2,
      icon: <Phone className="text-portfolio-blue" size={24} />,
      title: "Phone",
      value: "+91 9640074089",
      link: "tel:+919640074089",
    },
    {
      id: 3,
      icon: <Linkedin className="text-portfolio-blue" size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/swamy-kanchanapally",
      link: "https://linkedin.com/in/swamy-kanchanapally",
    },
    {
      id: 4,
      icon: <Github className="text-portfolio-blue" size={24} />,
      title: "GitHub",
      value: "github.com/kanchanapallyswamy",
      link: "https://github.com/kanchanapallyswamy",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-portfolio-lightBlue rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-orange/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="container-section">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-portfolio-lightBlue text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            Contact Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-portfolio-dark to-portfolio-blue/80 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-portfolio-gray max-w-2xl mx-auto mt-6 text-lg">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-portfolio-lightBlue rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-portfolio-dark mb-1">{item.title}</h3>
                        <a
                          href={item.link}
                          target={item.id > 2 ? "_blank" : undefined}
                          rel={item.id > 2 ? "noopener noreferrer" : undefined}
                          className="text-portfolio-gray hover:text-portfolio-blue transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="overflow-hidden border-none shadow-xl">
              <div className="h-2 w-full bg-gradient-to-r from-portfolio-blue to-portfolio-orange"></div>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-portfolio-lightGray focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-transparent"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-portfolio-dark mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-portfolio-lightGray focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-portfolio-dark mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-portfolio-lightGray focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-transparent"
                        placeholder="Type your message here..."
                        required
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue text-white font-medium py-6 transition-all duration-300 shadow-lg hover:shadow-portfolio-blue/20 hover:-translate-y-0.5 h-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
