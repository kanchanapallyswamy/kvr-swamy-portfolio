
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python", "Data Structures"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS"],
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

  const codingStats = [
    { name: "LeetCode Problems", value: 700, percentage: 85 },
    { name: "LeetCode Contests", value: 30, percentage: 70 },
    { name: "CodeChef Contests", value: 25, percentage: 65 },
    { name: "Longest Streak", value: 53, percentage: 90 },
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

            <div className="mt-8">
              <Card className="border border-gray-800 bg-gray-900 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                    Coding Profiles
                  </h3>
                  <div className="flex flex-col space-y-4">
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
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="border border-gray-800 shadow-lg overflow-hidden h-full">
              <div className="h-2 w-full bg-gradient-to-r from-portfolio-blue to-portfolio-orange"></div>
              <CardContent className="p-8 bg-gradient-to-br from-gray-900 to-black text-white h-full">
                <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">🏆 Live LeetCode Stats</h3>
                <p className="mb-8 text-gray-300 leading-relaxed">
                  Real-time competitive programming achievements and problem-solving journey on LeetCode platform.
                </p>
                
                {/* Live LeetCode Profile Stats */}
                <div className="mb-8 p-6 rounded-lg bg-black/70 border border-gray-600 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold text-portfolio-orange">@kvr_swamy</h4>
                    <a 
                      href="https://leetcode.com/u/kvr_swamy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-portfolio-blue hover:bg-portfolio-orange text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      View Profile
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="text-3xl font-bold text-green-400 mb-2">700+</div>
                      <div className="text-gray-300 text-sm">Problems Solved</div>
                      <div className="text-xs text-gray-500 mt-1">All Difficulties</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="text-3xl font-bold text-blue-400 mb-2">1600+</div>
                      <div className="text-gray-300 text-sm">Contest Rating</div>
                      <div className="text-xs text-gray-500 mt-1">Global Ranking</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="text-3xl font-bold text-orange-400 mb-2">53</div>
                      <div className="text-gray-300 text-sm">Max Streak</div>
                      <div className="text-xs text-gray-500 mt-1">Daily Solving</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                      <div className="text-gray-300 text-sm">Contests</div>
                      <div className="text-xs text-gray-500 mt-1">Participated</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-portfolio-blue/20 to-portfolio-orange/20 rounded-lg border border-portfolio-blue/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-300">Current Focus</div>
                        <div className="text-white font-semibold">Advanced Algorithms & System Design</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-300">Active Since</div>
                        <div className="text-white font-semibold">2023</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {codingStats.map((stat, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-300">{stat.name}</span>
                        <span className="font-bold text-white">{stat.value}+</span>
                      </div>
                      <Progress value={stat.percentage} className="h-2 bg-gray-700" indicatorColor="bg-portfolio-orange" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Explore my coding journey</p>
                      <h4 className="font-semibold text-white">Live problem solving & contests</h4>
                    </div>
                    <a 
                      href="https://leetcode.com/u/kvr_swamy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-portfolio-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-portfolio-orange transition-colors"
                    >
                      Visit LeetCode
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
