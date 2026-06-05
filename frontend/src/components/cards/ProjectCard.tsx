import type { Project } from '../../data/projects'

type ProjectCardProps = {
  project: Project
  onOpen: (project: Project) => void
  forceVisible?: boolean
}

export function ProjectCard({ project, onOpen, forceVisible = false }: ProjectCardProps) {
  return (
    <article className={`project-portfolio-card reveal-card ${forceVisible ? 'is-visible' : ''}`.trim()} data-project-category={project.category}>
      <div className="project-portfolio-image"><img src={project.image} alt={project.imageAlt} /></div>
      <p className="projects-category">{project.categoryLabel}</p>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <button className="project-card-link" type="button" onClick={() => onOpen(project)} aria-haspopup="dialog">
        View Project <span aria-hidden="true">&rarr;</span>
      </button>
    </article>
  )
}

