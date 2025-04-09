import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { BackButton } from "../../components";


const projects = [
  { name: "Проект", color: "#84CEEB", path: "/company-projects/project1" },
  { name: "Проект", color: "#269999", path: "/company-projects/emi" },
  { name: "Проект", color: "#68C1C1", path: "/company-projects/project6" },
  { name: "Проект", color: "#F3907E", path: "/company-projects/project7" },
  { name: "Проект", color: "#297CCA", path: "/company-projects/project8" },
  { name: "Проект", color: "#8FB7F1", path: "/company-projects/project9" },
  { name: "Проект", color: "#704ABB", path: "/company-projects/project10" },
  { name: "Проект", color: "#40B0EF", path: "/company-projects/project11" },
  { name: "Проект", color: "#647B8C", path: "/company-projects/project12" },
  { name: "Проект", color: "#ED7817", path: "/company-projects/project13" },
  { name: "Проект", color: "#1B8C51", path: "/company-projects/project14" },
  { name: "Проект", color: "#D85555", path: "/company-projects/project15" },
  { name: "Проект", color: "#104593", path: "/company-projects/project16" },
];

const emiasProjects = [
  { name : "Проект", color: "#79C5F5", path: "/company-projects/emi/project2" },
  { name : "Проект", color: "#9FCBE7", path: "/company-projects/emi/project3" },
  { name: "Проект", color: "#92D9D9", path: "/company-projects/emi/project4" },
  { name: "Проект", color: "#269999", path: "/company-projects/emi/project5" },
]

const ProjectItem = ({name, color, path}: {name: string, color: string, path: string}) => {
  
  const navigate = useNavigate();

  return (
    <div 
    onClick={() => navigate(path)}
      style={{
        width: "312px",
        height: "256px",
        backgroundColor: color,
        borderRadius: "8px",
        color: "#FFFFFF",
        alignContent: "center",
        textAlign: "center",
        cursor: "pointer"
      }}
    >
      <h3 className="h3">{name}</h3>
    </div>
  )
}

const EmiasProgectsPage: FC = () => {
  return (
    <div className="pageContent" style={{ paddingRight: "82px"}}>
      <BackButton path="/company-projects"/>
      <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
        {emiasProjects.map((project) => (
          <ProjectItem key={project.path} name={project.name} color={project.color} path={project.path} />
        ))}
      </div>
    </div>
  )
}
const CompanyProjectsPage: FC = () => {
  return (
    <div className="pageContent" style={{ paddingRight: "82px"}}>
      <BackButton />
      <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
        {projects.map((project) => (
          <ProjectItem key={project.path} name={project.name} color={project.color} path={project.path} />
        ))}
      </div>
    </div>
  )
}

export { CompanyProjectsPage, EmiasProgectsPage };