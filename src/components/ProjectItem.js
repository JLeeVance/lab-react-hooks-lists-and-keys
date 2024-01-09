import React from "react";



function ProjectItem({ name, about, technologies }) {
  const displayTech = technologies.map((string) => <span key={string}>{string}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      <span>
          {displayTech}
      </span> 
      </div>
    </div>
  );
}

export default ProjectItem;
