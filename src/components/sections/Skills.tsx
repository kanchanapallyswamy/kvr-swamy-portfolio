import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import LiveLeetCodeStats from "./LiveLeetCodeStats";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python", "Data Structures"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "GitHub"],
    },
    {
      title: "Certifications",
      skills: ["NPTEL Java Programming", "NPTEL Python Programming"],
    },
  ];

  const profiles = [
    {
      platform: "LeetCode",
      username: "kvr_swamy",
      url: "https://leetcode.com/u/kvr_swamy",
    },
    {
      platform: "CodeChef",
      username: "kvr_swamy", 
      url: "https://codechef.com/users/kvr_swamy",
    },
    {
      platform: "MentorPick",
      username: "22311a12f6-swamy",
      url: "https://mentorpick.com/profile/22311a12f6-swamy",
    },
  ];

  return (
    <section id="skills" className="section-spacing bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-portfolio-orange/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-portfolio-lightBlue rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="container-section">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-portfolio-blue/20 text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-portfolio-blue bg-clip-text text-transparent">
            Skills & Knowledge
          </h2>
        </div>
        
        <div className="space-y-12">
          {/* Skill Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="border border-gray-800 bg-gray-900 shadow-lg animate-fade-in"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                      {category.title}
                    </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coding Profiles */}
          <div>
            <Card className="border border-gray-800 bg-gray-900 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                  Coding Profiles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {profiles.map((profile, index) => (
                    <a 
                      key={index}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg border border-gray-700 hover:border-portfolio-blue transition-all hover:shadow-md bg-gray-800"
                    >
                      <div className="flex-grow">
                        <h4 className="font-medium text-white">{profile.platform}</h4>
                        <p className="text-gray-400">{profile.username}</p>
                      </div>
                      <span className="text-sm font-medium text-white bg-portfolio-blue px-3 py-1 rounded-full hover:bg-portfolio-darkBlue transition-colors">
                        Visit Profile
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* LeetCode Stats */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="border border-gray-800 shadow-lg overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-portfolio-blue to-portfolio-orange"></div>
              <CardContent className="p-8 bg-gradient-to-br from-gray-900 to-black text-white">
                <LiveLeetCodeStats username="kvr_swamy" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;