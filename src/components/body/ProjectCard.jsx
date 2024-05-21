const ProjectCard = ({ projectLink, gridClass, projectBanner, projectIcon, projectTitle, projectDesc }) => {
    return (
        <a href={projectLink} className={`project-card ${gridClass}`}>
            <span className="project-card--top">
                <img src={projectBanner} alt="" className="project-card--bottom--banner" />
            </span>

            <span className="project-card--bottom">
                <img src={projectIcon} alt="" className="project-card--bottom--icon" />
                <span className="project-card--bottom--title">
                    <h3>{projectTitle}</h3>
                    <h5>{projectDesc}</h5>
                </span>
            </span>
        </a>
    )
}

export default ProjectCard;