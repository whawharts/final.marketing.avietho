import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { ProjectCard } from '../components/cards/ProjectCard'
import { featuredProject, projectFilters, projects, type Project, type ProjectCategory } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [filterRefresh, setFilterRefresh] = useState(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const visibleProjects = activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter)

  useScrollReveal(`projects:${activeFilter}:${visibleProjects.length}:${filterRefresh}`)

  const handleFilterClick = (filter: ProjectCategory) => {
    document.querySelectorAll('.projects-page .projects-index .reveal-card').forEach((card) => {
      card.classList.add('is-visible')
    })
    setActiveFilter(filter)
    setFilterRefresh((value) => value + 1)
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (activeProject && !dialog.open) {
      dialog.showModal()
    }

    if (!activeProject && dialog.open) {
      dialog.close()
    }
  }, [activeProject])

  return (
    <>
      <section className="page-hero section-black">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">ADMS &middot; Projects</p>
            <h1>Campaigns built for visibility, trust, and action.</h1>
          </div>
          <p>A curated portfolio of digital campaigns, media production, social content, and strategic growth work created for brands, public figures, organizations, and institutions.</p>
        </div>
      </section>

      <section className="section section-charcoal projects-portfolio">
        <div className="container">
          <article className="projects-featured reveal-card">
            <div className="projects-featured-media">
              <img src={featuredProject.image} alt={featuredProject.imageAlt} />
            </div>
            <div className="projects-featured-copy">
              <p className="projects-kicker">Latest Project</p>
              <h2>{featuredProject.title}</h2>
              <p className="projects-category">Digital Marketing &amp; Public Relations</p>
              <p className="projects-featured-description">{featuredProject.description}</p>
              <button className="button projects-featured-cta" type="button" onClick={() => setActiveProject(featuredProject)} aria-haspopup="dialog">View Case Study</button>
            </div>
          </article>

          <div className="projects-filter-rail" aria-label="Filter projects by category">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter.value
              return (
                <button key={filter.value} className={isActive ? 'is-active' : ''} type="button" aria-pressed={isActive} onClick={() => handleFilterClick(filter.value)}>
                  {filter.label}
                </button>
              )
            })}
          </div>

          <div className={`projects-index ${filterRefresh > 0 ? 'is-filtered' : ''}`.trim()} aria-live="polite">
            {visibleProjects.length > 0 ? (
              visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={setActiveProject} forceVisible={filterRefresh > 0} />
              ))
            ) : (
              <p className="projects-empty-state">No projects found for this category yet.</p>
            )}
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onCancel={() => setActiveProject(null)}
        onClose={() => setActiveProject(null)}
        onClick={(event) => event.target === event.currentTarget && setActiveProject(null)}
      >
        {activeProject && (
          <div className="project-dialog-shell">
            <button className="project-dialog-close" type="button" onClick={() => setActiveProject(null)}>Close</button>
            <div className="project-dialog-media">
              <img src={activeProject.image} alt={activeProject.imageAlt} />
            </div>
            <p className="projects-kicker">{activeProject.categoryLabel}</p>
            <h2 id="project-dialog-title">{activeProject.title}</h2>
            <p className="project-dialog-description">{activeProject.description}</p>
            <div className="project-dialog-grid">
              <div><p className="project-dialog-label">Related Services</p><p>{activeProject.services}</p></div>
              <div><p className="project-dialog-label">Purpose</p><p>{activeProject.outcome}</p></div>
            </div>
            <Link className="button button-secondary" to="/contact">Start a Related Inquiry</Link>
          </div>
        )}
      </dialog>

      <section className="section final-cta section-black">
        <div className="container cta-panel">
          <p className="eyebrow">Start a Campaign</p>
          <h2>Want work that can carry attention?</h2>
          <p>Tell Avietho what you are launching, improving, or clarifying. The next step is campaign direction.</p>
          <div className="button-row">
            <Link className="button button-primary" to="/contact">Send Inquiry</Link>
            <Link className="button button-secondary" to="/services">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}

