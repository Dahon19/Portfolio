export function ProjectCard({ project, TechIcon, variant = "default", projectNumber = "01" }) {
  const techStack = [...new Set([...project.techStack.languages, ...project.techStack.tools])];
  const hasPreviewImage = Boolean(project.preview?.src);
  const visibleFeatures = project.features.slice(0, 2);
  const cardClassName = variant === "showcase" ? "project-card project-card--showcase" : "project-card";

  return (
    <article className={cardClassName} id={`project-${project.slug}`}>
      <div className="project-card__preview">
        {hasPreviewImage ? (
          <img
            src={project.preview.src}
            alt={project.preview.alt}
            className="project-card__preview-image"
            loading="lazy"
          />
        ) : (
          <div className="project-card__preview-empty" aria-hidden="true">
            <strong>Preview pending</strong>
            <span>{project.reference}</span>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__top project-card__top--numbered">
          <span className="project-card__number">{projectNumber}</span>
          <span className="project-card__reference">{project.reference}</span>
        </div>

        <h3 className="project-card__title" title={project.title}>{project.title}</h3>
        <p className="project-card__description">{project.summary ?? project.description}</p>

        <div className="project-card__insights">
          <div className="project-card__summary">
            <h4>Contribution</h4>
            <p>{project.contribution}</p>
          </div>

          <div className="project-card__details">
            <h4>Key features</h4>
            <ul>
              {visibleFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-card__meta">
          <div className="project-card__stack-group">
            <h4>Tech stack</h4>
            <div className="project-card__stack">
              {techStack.map((item) => (
                <span className="stack-chip" key={`${project.slug}-stack-${item}`}>
                  <span className="stack-chip__icon">
                    <TechIcon name={item} />
                  </span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-card__actions">
          {hasPreviewImage ? (
            <a
              className="project-card__action"
              href={project.preview.src}
              target="_blank"
              rel="noreferrer"
            >
              View Preview
            </a>
          ) : null}
          <a className="project-card__action project-card__action--muted" href={`#project-${project.slug}`}>
            View Details
          </a>
        </div>
      </div>
    </article>
  );
}
