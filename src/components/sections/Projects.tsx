
import { Code, Globe, Database, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Median Finder",
      description: "A web app using Max Heap & Min Heap to compute real-time median with O(log n) efficiency.",
      icon: <Globe className="text-portfolio-blue" size={24} />,
      technologies: ["HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Trie-Based Word Search",
      description: "Scalable search system with a Spring Boot backend, optimized for 100K+ words.",
      icon: <Code className="text-portfolio-blue" size={24} />,
      technologies: ["Java", "Spring Boot", "Trie"],
      color: "from-green-500 to-emerald-400",
    },
    {
      id: 3,
      title: "LRU Cache System",
      description: "Implemented with HashMap + Doubly Linked List achieving O(1) retrieval and 35% fewer cache misses.",
      icon: <Database className="text-portfolio-blue" size={24} />,
      technologies: ["Java", "Data Structures"],
      color: "from-purple-500 to-violet-400",
    },
    {
      id: 4,
      title: "AVL Tree Visualization",
      description: "Interactive Java Swing tool with real-time balancing for educational use.",
      icon: <Image className="text-portfolio-blue" size={24} />,
      technologies: ["Java", "Swing", "AVL Tree"],
      color: "from-orange-500 to-amber-400", 
    },
  ];

  return (
    <section id="projects" className="py-24 bg-portfolio-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-portfolio-lightBlue rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-portfolio-orange/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="container-section">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-portfolio-lightBlue text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-portfolio-dark to-portfolio-blue/80 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-portfolio-gray max-w-2xl mx-auto mt-6 text-lg">
            Here are some of the projects I've built, focusing on algorithm implementation and system efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 * project.id}s` }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
                <CardContent className="p-6 pt-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-portfolio-lightBlue rounded-lg mr-4 group-hover:bg-portfolio-blue/20 transition-colors">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-portfolio-dark">{project.title}</h3>
                  </div>
                  <p className="text-portfolio-gray mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-portfolio-lightGray">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="skill-badge">
                        {tech}
                      </span>
                    ))}
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
