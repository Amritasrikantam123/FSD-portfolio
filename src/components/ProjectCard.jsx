import { Link } from "react-router-dom";
import { useState } from "react";

function ProjectPreview({ title, image }) {
  return (
    <img
      className="project-image"
      src={image}
      alt={`${title} project preview`}
      loading="lazy"
    />
  );
}

function ProjectCard({ title, description, techStack, image, link, id }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="project-card">
      <ProjectPreview title={title} image={image} />

      <div className="project-card-body">
        <div className="project-top">
          <div className="tag-list">
            {techStack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
          </div>
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        {showDetails && (
          <div className="details-box">
            <strong>More details</strong>
            <p>This card owns its own view state, so opening this project does not open the others.</p>
          </div>
        )}

        <div className="project-links">
          <button
            className="small-btn"
            type="button"
            onClick={() => setShowDetails((current) => !current)}
            aria-expanded={showDetails}
          >
            {showDetails ? "Hide Details" : "View Details"}
          </button>

          <Link className="text-link" to={`/projects/${id}`}>
            Full Project
          </Link>

          {link !== "#" && (
            <a
              className="text-link"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;