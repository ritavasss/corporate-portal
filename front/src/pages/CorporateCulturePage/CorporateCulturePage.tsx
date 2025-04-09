import { FC } from "react";

import { BackButton } from "../../components";
import { FolderImg } from "../../assets/images";
import { useStyles } from "../CommonPages.style";


const Item = ({text}: {text: string}) => {

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      style={{ 
        textDecoration: "none",
        color: "#011532",
      }}
    >
      <div style={{ 
        display: "flex",
        flexDirection: "column",
        width: "184px",
        alignItems: "center",
        gap: "4px"
      }}>
        <FolderImg width={"184px"} height={"149.83px"} />
        <div style={{ 
          textAlign: "center",
          fontFamily: "Open Sans",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "28px",
        }}>{text}</div>
      </div>
    </a>
  )
}
const CorporateCulturePage: FC = () => {
  const {classes} = useStyles({ markerColor: ""});
  
  return (
    <div className="pageContent">
      <BackButton />
      <div className={classes.formatedText}>
        <h2 className="h2" style={{ marginBottom: "36px " }}>Корпоративная культура</h2>
        <h3 className="h3">Фото с мероприятий</h3>
        <div style={{
          display: "flex",
          gap: "33px",
          flexWrap: "wrap",
        }}>
          <Item text="Летний корпоратив 2022" />
          <Item text="Летний корпоратив 2023" />
          <Item text="WARPOINT | 07.03.2024" />
          <Item text="Летний корпоратив 2024" />
          <Item text="НГ Корпоратив 2024" />
          <Item text="Хэллоуин фото" />
        </div>
      </div>
    </div>
  )
}

export { CorporateCulturePage };