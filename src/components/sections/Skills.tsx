
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
    <section id="skills" className="section-spacing bg-portfolio-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-portfolio-orange/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-portfolio-lightBlue rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="container-section">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-portfolio-lightBlue text-portfolio-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-portfolio-dark to-portfolio-blue/80 bg-clip-text text-transparent">
            Skills & Knowledge
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-lg animate-fade-in"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-portfolio-blue mb-4 border-b pb-2">
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
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-portfolio-dark mb-4 border-b pb-2">
                    Coding Profiles
                  </h3>
                  <div className="flex flex-col space-y-4">
                    {profiles.map((profile, index) => (
                      <a 
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 rounded-lg border border-portfolio-lightGray hover:border-portfolio-blue transition-all hover:shadow-md bg-white"
                      >
                        <div className="flex-grow">
                          <h4 className="font-medium text-portfolio-dark">{profile.platform}</h4>
                          <p className="text-portfolio-gray">{profile.username}</p>
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
            <Card className="border-none shadow-lg overflow-hidden h-full">
              <div className="h-2 w-full bg-gradient-to-r from-portfolio-blue to-portfolio-orange"></div>
              <CardContent className="p-8 bg-gradient-to-br from-portfolio-darkBlue to-portfolio-blue text-white h-full">
                <h3 className="text-2xl font-bold mb-8">DSA Enthusiast</h3>
                <p className="mb-10 text-gray-100 leading-relaxed">
                  I'm passionate about Data Structures and Algorithms, regularly practicing and improving my problem-solving skills through competitive programming.
                </p>
                
                <div className="space-y-8">
                  {codingStats.map((stat, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{stat.name}</span>
                        <span className="font-bold">{stat.value}+</span>
                      </div>
                      <Progress value={stat.percentage} className="h-2 bg-white/20" indicatorColor="bg-portfolio-orange" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-200">Want to see more?</p>
                      <h4 className="font-semibold">Check my coding profiles</h4>
                    </div>
                    <a 
                      href="https://leetcode.com/u/kvr_swamy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-portfolio-blue px-4 py-2 rounded-lg font-medium hover:bg-portfolio-orange hover:text-white transition-colors"
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
