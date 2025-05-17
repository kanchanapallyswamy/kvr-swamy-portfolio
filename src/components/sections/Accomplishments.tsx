
import { CheckCircle } from "lucide-react";

const Accomplishments = () => {
  const accomplishments = [
    "Solved 600+ problems on LeetCode",
    "53-day coding streak on LeetCode",
    "Participated in 30+ contests (LeetCode) and 25+ (CodeChef)",
    "Ranked Top 10 out of 155 in Being Zero training",
    "Solved 35+ SQL problems",
  ];

  return (
    <section id="accomplishments" className="py-20 bg-portfolio-lightBlue">
      <div className="container-section">
        <h2 className="section-title text-center">Accomplishments</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {accomplishments.slice(0, Math.ceil(accomplishments.length / 2)).map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    <CheckCircle className="text-portfolio-blue mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                {accomplishments.slice(Math.ceil(accomplishments.length / 2)).map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.3 * (index + Math.ceil(accomplishments.length / 2))}s` }}
                  >
                    <CheckCircle className="text-portfolio-blue mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a
              href="https://leetcode.com/u/kvr_swamy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              View LeetCode Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
