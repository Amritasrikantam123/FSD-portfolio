import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="not-found">
        <h1>Project not found</h1>
        <p>The project ID "{projectId}" does not match a portfolio project.</p>
        <Link className="primary-btn" to="/projects">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="detail-card">
      <img className="detail-image" src={project.image} alt={`${project.title} preview`} />
      <div className="detail-content">
        <div className="tag-list">
          {project.techStack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
        </div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="about-buttons">
          {project.link !== "#" && (
            <a className="primary-btn" href={project.link} target="_blank" rel="noreferrer">View Repository ↗</a>
          )}
          <Link className="secondary-btn" to="/projects">Back to Projects</Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;