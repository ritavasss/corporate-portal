import { FC } from "react";
import { Link } from "react-router-dom";

import { CompanyInfoImg, DottedOutline4 } from "../../assets/images";
import { BackButton, PictureComp } from "../../components";
import { LogoIcon, LogoPart1, LogoPart2 } from "../../assets/icons";
import { useStyles } from "../CommonPages.style";

const LogoItem = ({picture, text, top}: {picture: any, text: string, top: number}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
      <div><DottedOutline4 width={"388px"} height={"367px"}/></div>
      <div style={{ position: "absolute", top: top }}>{picture}</div>
      <h2 className="h2">{text}</h2>
    </div>
  )
}
const CompanyInfoPage: FC = () => {
  const { classes } = useStyles( { markerColor: "#3798EA" } );

  return (
    <div className="pageContent">
      <BackButton />
      <div className={classes.picture}>
        <PictureComp 
          firstItem={<CompanyInfoImg width={"734px"} height={"495px"}/>}
          color={"#3798EA"}
        />
      </div>
      <div className={classes.formatedText}>
        <h2 style={{ marginBottom: "80px"}}>Информация о компании:</h2>
        <p>
          Digital Future Systems – мы команда профессионалов с богатым опытом проектирования, 
          разработки и внедрения информационных систем для корпоративных и государственных заказчиков.
        </p>
        <p>
          Мы разрабатываем порталы, информационные и учетные системы, решаем задачи в сфере бизнес-аналитики, 
          оптимизации бизнес-процессов, государственного, муниципального и регионального управления, финансовой, 
          закупочной деятельности и др. 
          <br/> Создаем высоконадежные, производительные системы, рассчитанные на самый широкой спектр применения.
        </p>
        <Link
          to="/company-info/employees"
          style={{ display: "flex", justifySelf: "center" }}
        >
          <div className={classes.button}>
            <h3>Сотрудники</h3>
          </div>
        </Link>
      </div>
      <h3 style={{ fontWeight: 600, fontSize: "32px", margin: "84px 0 42px 0", lineHeight: "39.01px"}}>Интересный факт о нас:</h3>
      <div className={classes.sectionContainer} style={{ marginBottom: "60px" }}>
        <div className={classes.section1}>
          <div style={{ width: "665px", height: "537px", position: "relative" }}>
            <div style={{ position: "absolute", top: "0px", right: "0px", background: "#E4F4FF", width: "437px", height: "295px", borderRadius: "8px" }}></div>
            <div style={{ position: "absolute", bottom: "0px", left: "0px", background: "#3798EA", width: "437px", height: "295px", borderRadius: "8px" }}></div>
            <h1 className="h1" style={{ fontSize: "74px", lineHeight: "90.21px", position: "absolute", top: 110, left: 29 }}>
              Как появился <br /> <span style={{ color: "#FFFFFF" }}>логотип <br /> компании</span> ?
            </h1>
          </div>
        </div>
        <div className={classes.section2} style={{ justifySelf: "flex-end" }}>
          <PictureComp 
            firstItem={<LogoIcon width={"581px"} height={"278px"}/>}
          />
        </div>
      </div>
      <span style={{
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "27.24px",
      }}>
        На логотипе ты можешь увидеть буквы:
      </span>
      <div style={{ marginTop: "40px" }}>
        <div className={classes.pictureLeft} style={{ gap: "32px", justifySelf: "left", display: "flex" }}>
          <LogoItem picture={<LogoPart1 width={"190.18px"} height={"271.32px"}/>} text="“D”" top={48}/>
          <LogoItem picture={<LogoPart2 width={"159.03px"} height={"222.4px"}/>} text="“П”" top={73}/>
        </div>
        <div className={classes.formatedText}>
          <p style={{ marginTop: 0 }}><h4 style={{ display: "inline" }}>Буква «D»</h4> – это так называемая «несуществующая фигура», один из видов оптических иллюзий, фигура, 
             кажущаяся на первый взгляд проекцией обычного трёхмерного объекта, при внимательном рассмотрении которой 
             становятся видны противоречивые соединения элементов фигуры.
          </p>
          <p><h4 style={{ display: "inline" }}>Буква «П»</h4> – как символ Пермского края, подчеркивает, что компания родом из Перми, отсылая нас к логотипу Перми 
            – красной буквы «П», автор которого Артемий Лебедев, московский дизайнер.
          </p>
          <p>Пермь —первый город в России, получивший собственный логотип.</p>
          <p>Краткое названиенашей компании «DFS» – это особый алгоритм обхода графа (Depth-first search), знакомый разработчикам. 
             Стратегия поиска в глубину, как и следует из названия, состоит в том, чтобы идти «вглубь» графа, насколько это возможно. 
          </p>
        </div>
      </div>
    </div>
  )
}

export { CompanyInfoPage };