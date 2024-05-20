const ProjectCard = (props) => {
    return (
        <a href={props.projectLink} className={`project-card ${props.gridClass}`}>
            <span className="project-card--top">
                <img src={props.projectBanner} alt="" className="project-card--bottom--banner" />
            </span>

            <span className="project-card--bottom">
                <img src={props.projectIcon} alt="" className="project-card--bottom--icon" />
                <span className="project-card--bottom--title">
                    <h3>{props.projectTitle}</h3>
                    <h5>{props.projectDesc}</h5>
                </span>
            </span>
        </a>
    )
}

export default ProjectCard;