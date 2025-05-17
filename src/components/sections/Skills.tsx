
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python", "SQL"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS"],
    },
    {
      title: "Tools & Databases",
      skills: ["MySQL", "GitHub"],
    },
    {
      title: "DSA Knowledge",
      skills: [
        "Arrays & Strings",
        "Linked Lists",
        "Stacks & Queues",
        "Trees & Graphs",
        "Hash Tables",
        "Heaps",
        "Dynamic Programming",
        "Greedy Algorithms",
        "Sieve's Algorithm",
        "Sorting Algorithms",
      ],
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
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="section-title text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="card p-6 animate-fade-in"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <h3 className="text-lg font-semibold text-portfolio-blue mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-portfolio-dark mb-4">
                Coding Profiles
              </h3>
              <div className="flex flex-col space-y-4">
                {profiles.map((profile, index) => (
                  <a 
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg border border-portfolio-lightGray hover:border-portfolio-blue transition-all hover:shadow-md"
                  >
                    <div className="flex-grow">
                      <h4 className="font-medium text-portfolio-dark">{profile.platform}</h4>
                      <p className="text-portfolio-gray">{profile.username}</p>
                    </div>
                    <span className="text-portfolio-blue">Visit Profile</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="card p-8 bg-gradient-to-br from-portfolio-blue to-portfolio-darkBlue text-white">
              <h3 className="text-2xl font-bold mb-6">DSA Enthusiast</h3>
              <p className="mb-8 text-gray-100">
                I'm passionate about Data Structures and Algorithms, regularly practicing and improving my problem-solving skills through competitive programming.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">LeetCode Problems</span>
                    <span className="font-bold">600+</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div className="bg-portfolio-orange h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Coding Contests</span>
                    <span className="font-bold">35+</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div className="bg-portfolio-orange h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Longest Streak</span>
                    <span className="font-bold">53 days</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div className="bg-portfolio-orange h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
