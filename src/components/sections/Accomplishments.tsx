
import { CheckCircle, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Accomplishments = () => {
  const accomplishments = [
    {
      id: 1,
      text: "Solved 600+ problems on LeetCode",
      icon: <CheckCircle className="text-portfolio-blue" size={20} />,
    },
    {
      id: 2,
      text: "53-day coding streak on LeetCode",
      icon: <Calendar className="text-portfolio-blue" size={20} />,
    },
    {
      id: 3,
      text: "Participated in 30+ contests (LeetCode) and 25+ (CodeChef)",
      icon: <Award className="text-portfolio-blue" size={20} />,
    },
    {
      id: 4,
      text: "Ranked Top 10 out of 155 in Being Zero training",
      icon: <Award className="text-portfolio-blue" size={20} />,
    },
    {
      id: 5,
      text: "Solved 35+ SQL problems",
      icon: <CheckCircle className="text-portfolio-blue" size={20} />,
    },
  ];

  return (
    <section id="accomplishments" className="py-24 bg-portfolio-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-portfolio-orange/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-portfolio-lightBlue rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="container-section">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-portfolio-lightBlue text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-portfolio-dark to-portfolio-blue/80 bg-clip-text text-transparent">
            My Accomplishments
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-2 w-full bg-gradient-to-r from-portfolio-orange to-portfolio-blue"></div>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {accomplishments.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${0.2 * item.id}s` }}
                  >
                    <div className="p-2 bg-portfolio-lightBlue rounded-lg mt-1">
                      {item.icon}
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-12">
                <a
                  href="https://leetcode.com/u/kvr_swamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-portfolio-blue/20 hover:-translate-y-1"
                >
                  View LeetCode Profile
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
