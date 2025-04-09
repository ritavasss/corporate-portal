import { FC } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { projectsData } from "../../../data/projectsData";
import { DottedOutline3, ProjectPageImg } from "../../../assets/images";
import { BackButton, Ellipse, PictureComp } from "../../../components";
import { useStyles } from "../../CommonPages.style";


const ProjectPage: FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const project = projectsData.find((item) => item.name === projectId);

  if (!project) {
    return (
      <div className="pageContent">
        <BackButton path={"/company-projects"}/>
        <h2>Проект не найден</h2>
      </div>
    )
  }

  const {classes} = useStyles({ markerColor: project.color });

  return (
    <div className="pageContent" style={{paddingRight: "57px"}}>
      <BackButton path={project.parentPath || "/company-projects"}/>
      <div className={classes.picture} style={{margin: "0 0 20px 80px"}}>
        <PictureComp
          firstItem={<ProjectPageImg width={"734px"} height={"495px"} fill={project.color}/>}
          color={project.therdColor || project.color}
        />
        { project?.secondColor && project?.type !== 1 &&
          <div style={{ display: "flex", justifyContent: "center", gap: "76px", marginTop: "60px" }}>
            <Ellipse color={project.color}/>
            <Ellipse color={project.secondColor}/>
            <Ellipse color={project.therdColor}/>
          </div>
        }
      </div>
      <div className={classes.formatedText}>
        <div>
          <ReactMarkdown>
            {projectsData.find((item) => item.name === projectId)?.text}
          </ReactMarkdown>
        </div>
      </div>
      { project?.secondColor && project?.type === 1 &&
        <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "63px 0 10px 0" }}>
          <div><DottedOutline3 width={"100%"} height={"100%"}/></div>
          <div style={{ display: "flex", justifyContent: "center", gap: "76px", marginTop: "4px", position: "absolute" }}>
            <Ellipse color={project.color}/>
            <Ellipse color={project.secondColor}/>
            <Ellipse color={project.therdColor}/>
          </div>
        </div>
      }
    </div>
  );
};

export { ProjectPage };
