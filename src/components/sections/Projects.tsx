
import { Code, Globe, Database, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Median Finder",
      description: "Developed a web-based tool to dynamically compute the median of a stream of numbers in real-time using two heaps (Min & Max Heap). Ensures O(log n) insertion and O(1) median retrieval with clean, responsive UI and interactive input.",
      icon: <Globe className="text-portfolio-blue" size={24} />,
      technologies: ["HTML", "CSS", "JavaScript", "Heap Data Structure"],
      color: "from-blue-500 to-cyan-400",
      liveUrl: "http://medianfinder-kvr.streamlit.app",
      features: ["Real-time computation", "Interactive UI", "O(1) retrieval"],
    },
    {
      id: 2,
      title: "LRU Cache Implementation",
      description: "Developed a console-based LRU (Least Recently Used) Cache with O(1) time for get and put operations. Used HashMap + custom doubly linked list to manage item access and eviction efficiently.",
      icon: <Database className="text-portfolio-blue" size={24} />,
      technologies: ["Java", "HashMap", "Doubly Linked List"],
      color: "from-purple-500 to-violet-400",
      liveUrl: "http://lru-cache-kvr.streamlit.app",
      features: ["O(1) operations", "Memory efficient", "Custom data structure"],
    },
  ];

  return (
    <section id="projects" className="section-spacing bg-portfolio-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-portfolio-lightBlue rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-portfolio-orange/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="container-section">
        <div className="flex flex-col items-center mb-12">
          <span className="bg-portfolio-lightBlue text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-portfolio-dark to-portfolio-blue bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-portfolio-gray max-w-2xl mx-auto mt-6 text-lg">
            Here are some of the projects I've built, focusing on algorithm implementation and system efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 * project.id}s` }}
            >
              <Card className="h-full overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <div className={`h-1 w-full bg-gradient-to-r ${project.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-portfolio-lightBlue to-portfolio-lightBlue/50 rounded-xl mr-4 group-hover:from-portfolio-blue/20 group-hover:to-portfolio-blue/10 transition-all duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-portfolio-dark group-hover:text-portfolio-blue transition-colors duration-300">{project.title}</h3>
                  </div>
                  
                  <p className="text-portfolio-gray mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-portfolio-dark mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-portfolio-blue/10 text-portfolio-blue px-3 py-1 rounded-full border border-portfolio-blue/20">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-portfolio-dark mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="skill-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-portfolio-lightGray">
                    <Button 
                      asChild
                      className="flex-1 bg-gradient-to-r from-portfolio-blue to-portfolio-darkBlue hover:from-portfolio-darkBlue hover:to-portfolio-blue text-white border-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
