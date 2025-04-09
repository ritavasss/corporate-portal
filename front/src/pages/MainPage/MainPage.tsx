import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { AdaptationProgramImg, CompanyInfoImg, CompanyProjectsImg, CorporateCultureImg, EquipmentRemovalImg, PersonnelIssuesImg, RedmineLaborImg, ReferalProgramImg } from "../../assets/images";
import { MainPageItem } from "./MainPageItems";
import { useStyles } from "./MainPage.styles";
  
const MainPage: FC = () => {

  const { classes } = useStyles();
  const navigate = useNavigate();

  const sections = [
    { title: "Информация о компании", picture: <CompanyInfoImg />, rotationAngle: -3.41, path: "/company-info" },
    { title: "Программа адаптации", picture: <AdaptationProgramImg />, rotationAngle: 1.54, path: "/adaptation-program" },
    { title: "Проекты компании", picture: <CompanyProjectsImg />, rotationAngle: -2.46, path: "/company-projects" },
    { title: "Больничный\\отпуск\\зарплата", picture: <PersonnelIssuesImg />, rotationAngle: 1.55, path: "/personal-issues" },
    { title: "Реферальная программа", picture: <ReferalProgramImg />, rotationAngle: 6.48, path: "/referral-program" },
    { title: "Вынос оборудования", picture: <EquipmentRemovalImg />, rotationAngle: -2.47, path: "/equipment" },
    { title: "Трудозатраты в Redmine", picture: <RedmineLaborImg />, rotationAngle: 3.3, path: "/redmine" },
    { title: "Корпоративная культура", picture: <CorporateCultureImg />, rotationAngle: -2.54, path: "/corporate-culture" },
  ];

  return (
    <div className="pageContent">
      <div className={classes.mainPageContent}>
        {sections.map((section) => (
            <MainPageItem 
              key={section.path}
              title={section.title}
              picture={section?.picture}
              rotationAngle={section.rotationAngle}
              onClick={() => navigate(section.path)}
            />
          ))}
      </div>
    </div>
  )
}

export { MainPage };