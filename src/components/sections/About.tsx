
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Sreenidhi Institute of Science and Technology",
      period: "2022–2026",
      score: "CGPA: 8.97/10",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Pranava Junior College, Bhongir",
      period: "2020–2022",
      score: "Score: 979/1000",
    },
    {
      degree: "Secondary School",
      institution: "KPR Gowtham School, Sathupally",
      period: "2019–2020",
      score: "GPA: 10/10",
    },
  ];

  return (
    <section id="about" className="section-spacing bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-blue/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-orange/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="container-section">
        <div className="flex flex-col items-center mb-12">
          <span className="bg-portfolio-lightBlue text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Personal Bio */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-portfolio-blue to-portfolio-orange"></div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Personal Bio</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  I'm a software developer driven by a passion for problem-solving and algorithmic thinking. With over 700+ problems solved on LeetCode and active participation in contests, I've built a strong foundation in data structures and Java programming. I enjoy turning logic into clean, efficient code and believe in growing consistently—one challenge at a time. Whether it's coding, learning, or building, I'm always focused on improving and staying curious.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-8 text-white">🎓 Education</h3>
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
                        <h4 className="font-bold text-lg text-white mb-1">
                          {item.degree}
                        </h4>
                        <p className="text-gray-300 mb-3">{item.institution}</p>
                        <div className="flex flex-wrap items-center justify-between mt-2">
                          {item.period && (
                            <span className="text-sm text-portfolio-blue font-medium">{item.period}</span>
                          )}
                          <span className="text-sm font-semibold bg-portfolio-blue/20 text-portfolio-blue px-3 py-1 rounded-full">
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
