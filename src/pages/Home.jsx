import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import AboutContent from "../components/AboutContent";
import SectionHeading from "../components/SectionHeading";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="loading-screen" aria-live="polite">
        <div className="spinner" aria-hidden="true"></div>
        <p>Loading portfolio...</p>
      </section>
    );
  }

  const aboutData = {
    intro: (
      <>
        I'm a Computer Science undergraduate at{" "}
        <strong>National Institute of Technology Warangal</strong> passionate
        about building meaningful software solutions, solving algorithmic
        problems, and exploring modern web technologies.
      </>
    ),
    interests: ["Full Stack Development", "Competitive Programming", "Compiler Design", "Artificial Intelligence"]
  };

  return (
    <>
      <section className="profile-layout">
        <ProfileCard
          name="Amrita Srikantam"
          designation="Computer Science Undergraduate"
          college="National Institute of Technology Warangal"
          contact="+91 7095502232"
        />
        <AboutContent {...aboutData} />
      </section>

      <section className="home-cta">
        <SectionHeading
          title="Welcome"
          subtitle="Explore my education, projects, skills, achievements and contact information."
        />
        <div className="about-buttons">
          <Link to="/projects" className="primary-btn">View Projects</Link>
          <Link to="/contact" className="secondary-btn">Contact Me</Link>
        </div>
      </section>
    </>
  );
}

export default Home;