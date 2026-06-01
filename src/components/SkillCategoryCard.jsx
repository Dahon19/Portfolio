import { BadgeCheck } from "lucide-react";

export function SkillCategoryCard({
  icon: Icon,
  title,
  items = [],
  technologies = items,
  competencies = [],
  getItemIcon,
  delay = 0
}) {
  const hasTechnologies = technologies.length > 0;
  const hasCompetencies = competencies.length > 0;

  return (
    <article
      className="skill-card"
      data-reveal
      style={{ "--delay": `${delay}ms` }}
    >
      <div className="skill-card__header">
        <span className="skill-card__icon">
          <Icon size={20} />
        </span>
        <h3>{title}</h3>
      </div>
      {hasTechnologies ? (
        <div className="skill-card__block">
          <h4>Technologies</h4>
          <div className="skill-card__items skill-card__items--badges">
            {technologies.map((item) => (
              <div className="skill-card__item" key={`${title}-${item}`}>
                <span className="skill-card__item-icon" aria-hidden="true">
                  {getItemIcon ? getItemIcon(item) : <BadgeCheck size={14} />}
                </span>
                <span className="skill-card__item-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {hasCompetencies ? (
        <div className="skill-card__block">
          <h4>Competencies</h4>
          <ul className="skill-card__list">
            {competencies.map((item) => (
              <li key={`${title}-${item}`}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
