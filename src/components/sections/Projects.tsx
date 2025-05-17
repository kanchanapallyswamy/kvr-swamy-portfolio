
import { Code, Globe, Database, Image } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Median Finder",
      description: "A web app using Max Heap & Min Heap to compute real-time median with O(log n) efficiency.",
      icon: <Globe className="text-portfolio-blue" size={24} />,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Trie-Based Word Search",
      description: "Scalable search system with a Spring Boot backend, optimized for 100K+ words.",
      icon: <Code className="text-portfolio-blue" size={24} />,
      technologies: ["Java", "Spring Boot", "Trie"],
    },
    {
      id: 3,
      title: "LRU Cache System",
      description: "Implemented with HashMap + Doubly Linked List achieving O(1) retrieval and 35% fewer cache misses.",
      icon: <Database className="text-portfolio-blue" size={24} />,
      technologies: ["Java", "Data Structures"],
    },
    {
      id: 4,
      title: "AVL Tree Visualization",
      description: "Interactive Java Swing tool with real-time balancing for educational use.",
      icon: <Image className="text-portfolio-blue" size={24} />,
      technologies: ["Java", "Swing", "AVL Tree"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-light">
      <div className="container-section">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="text-center text-portfolio-gray max-w-2xl mx-auto mb-12 text-lg">
          Here are some of the projects I've built, focusing on algorithm implementation and system efficiency.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card-project p-6 animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${0.2 * project.id}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-portfolio-lightBlue rounded-lg mr-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
