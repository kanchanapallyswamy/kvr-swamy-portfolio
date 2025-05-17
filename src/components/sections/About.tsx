
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech, Information Technology",
      institution: "Sreenidhi Institute of Science and Technology",
      period: "2022–2026",
      score: "CGPA: 9.0/10",
    },
    {
      degree: "Intermediate",
      institution: "Pranava Junior College",
      period: "2020–2022",
      score: "97.9%",
    },
    {
      degree: "Secondary School",
      institution: "KPR Gowtham School",
      period: "",
      score: "GPA: 10/10",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-lightBlue rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-lightBlue rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="container-section">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-portfolio-lightBlue text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in space-y-8" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-portfolio-blue to-portfolio-orange"></div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold mb-6 text-portfolio-dark">Personal Bio</h3>
                <p className="text-lg text-portfolio-gray mb-6 leading-relaxed">
                  I'm a B.Tech student from Sreenidhi Institute of Science and Technology, majoring in Information Technology. I'm driven by a deep curiosity for system efficiency and love building performance-focused projects using Java, C, and Python.
                </p>
                <p className="text-lg text-portfolio-gray leading-relaxed">
                  My passion lies in mastering Data Structures & Algorithms, which I believe are the foundation for creating efficient and scalable software solutions. I enjoy solving complex problems and continuously challenging myself through coding platforms like LeetCode and CodeChef.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-8 text-portfolio-dark">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-portfolio-blue to-portfolio-orange"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-portfolio-lightBlue rounded-lg mt-1 group-hover:bg-portfolio-blue/20 transition-colors">
                        <Briefcase className="text-portfolio-blue" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-portfolio-dark mb-1">
                          {item.degree}
                        </h4>
                        <p className="text-portfolio-gray mb-3">{item.institution}</p>
                        <div className="flex flex-wrap items-center justify-between mt-2">
                          {item.period && (
                            <span className="text-sm text-portfolio-blue font-medium">{item.period}</span>
                          )}
                          <span className="text-sm font-semibold bg-portfolio-lightBlue text-portfolio-darkBlue px-3 py-1 rounded-full">
                            {item.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
