import SectionHeading from "../components/SectionHeading";

const education = [
  ["2024 - Present", "National Institute of Technology Warangal", "B.Tech • Computer Science & Engineering", "CGPA: 8.91"],
  ["2024", "Sri Chaitanya Junior College", "Telangana Board", "Percentage: 98.3%"],
  ["2022", "Nava Bharat Public School", "CBSE", "Percentage: 96.83%"]
];

const skills = {
  Programming: ["C", "C++", "Java", "Python", "JavaScript"],
  Web: ["HTML5", "CSS3", "React", "Node.js", "Express"],
  Coursework: ["DSA", "OS", "DBMS", "OOP", "Compiler Design"]
};

function About() {
  return (
    <>
      <section>
        <SectionHeading title="Education" subtitle="Academic background and current degree." />
        <div className="education-list">
          {education.map(([year, institution, course, score]) => (
            <article className="edu-card" key={institution}>
              <div className="edu-year">{year}</div>
              <div className="edu-content">
                <h3>{institution}</h3>
                <h4>{course}</h4>
                <p>{score}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading title="Technical Skills" />
          <div className="skills-box">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-category" key={category}>
                <h4>{category}</h4>
                <div className="skill-tags">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading title="Achievements" />
          <div className="achievement-grid">
            <article className="achievement-card"><h3>99.7</h3><p>JEE Main Percentile</p></article>
            <article className="achievement-card"><h3>AIR 4625</h3><p>JEE Main 2024</p></article>
            <article className="achievement-card"><h3>WeForShe</h3><p>Myntra OA Participant</p></article>
            <article className="achievement-card"><h3>Hackathons</h3><p>Multiple Technical Events</p></article>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;