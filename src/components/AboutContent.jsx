function AboutContent({ intro, interests }) {
  return (
    <article className="about-card">
      <div className="section-heading">
        <h2>About Me</h2>
      </div>
      <p>{intro}</p>
      <p>
        I enjoy working on projects that combine technology with real-world impact.
        My interests include {interests.join(", ")}.
      </p>

      <div className="about-grid">
        <div className="info-item"><h4>College</h4><p>NIT Warangal</p></div>
        <div className="info-item"><h4>Degree</h4><p>B.Tech • Computer Science</p></div>
        <div className="info-item"><h4>CGPA</h4><p>8.91</p></div>
        <div className="info-item"><h4>Coursework</h4><p>DSA • OS • DBMS • OOP • Compiler Design</p></div>
      </div>
    </article>
  );
}

export default AboutContent;