
const About = () => {
  const education = [
    {
      degree: "B.Tech, Information Technology",
      institution: "Sreenidhi Institute of Science and Technology",
      period: "2022–2026",
      score: "CGPA: 9.3/10",
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
    <section id="about" className="py-16 bg-white">
      <div className="container-section">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="section-subtitle">Personal Bio</h3>
            <p className="text-lg text-portfolio-gray mb-6">
              I'm a B.Tech student from Sreenidhi Institute of Science and Technology, majoring in Information Technology. I'm driven by a deep curiosity for system efficiency and love building performance-focused projects using Java, C, and Python.
            </p>
            <p className="text-lg text-portfolio-gray">
              My passion lies in mastering Data Structures & Algorithms, which I believe are the foundation for creating efficient and scalable software solutions. I enjoy solving complex problems and continuously challenging myself through coding platforms like LeetCode and CodeChef.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="section-subtitle">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="card p-6 border-l-4 border-portfolio-blue">
                  <h4 className="font-bold text-lg text-portfolio-dark mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-portfolio-gray mb-1">{item.institution}</p>
                  <div className="flex flex-wrap items-center justify-between mt-2">
                    <span className="text-sm text-portfolio-blue font-medium">{item.period}</span>
                    <span className="text-sm font-semibold bg-portfolio-lightBlue text-portfolio-darkBlue px-3 py-1 rounded-full">
                      {item.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
