import { FC } from "react";

import { BackButton, PictureComp, Ellipse } from "../../components";
import { AdaptationProgramImg } from "../../assets/images";
import { WayImg } from "./WayImg";
import { useStyles } from "../CommonPages.style";


const FrameItems = ({title, text} : {title: string, text: string}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "266px" }}>
      <p style={{ fontSize: "20px", fontWeight: 600, lineHeight: "27.24px", margin: 0 }}>{title}</p>
      <ul>
        { text.split("\n").map((item, index) => 
          <li style={{ margin: "12px 0" }} key={index}>{item}</li>)
        }
      </ul>
    </div>
  )
}
const AdaptationProgramPage: FC = () => {
  const {classes} = useStyles({ markerColor: "#7FD1AE" });
  return (
    <div className="pageContent">
      <BackButton />
      <div className={classes.picture}>
        <PictureComp 
          firstItem={<AdaptationProgramImg width={"734px"} height={"495px"}/>}
          color="#5EDDA7"
        />
      </div>
      <div className={classes.formatedText}>
        <h2>Программа адаптации</h2>
        <h3>Экватор и закрытие испытательного срока</h3>
        <p>Комфорт сотрудников определяет дальнейшее развитие компании, а также качество и количество выполняемой работы.</p>
        <p>Для того, чтобы отслеживать адаптацию и держать руку на пульсе, для новых сотрудников мы проводим:</p>
        <ul>
          <li>Экватор (спустя 1,5 месяца работы)</li>
          <li>Закрытие испытательного срока (спустя 3 месяца работы)</li>
        </ul>
        <p>Для этого будем встречаться в 1,5 и 3 месяца работы: руководитель, сотрудник, HR.</p>
        <p>Формат встречи, в зуме: обменяться фидбеком как проходит адаптация: 
          ты делишься своими впечатлениями, руководитель даёт обратную связь от себя, обсуждаем успехи.</p>
        <div style={{ 
          display: "flex",
          paddingLeft: "146px",
          gap: "76px",
          marginTop: "4px",
        }}>
          <Ellipse color="#7FD1AE"/>
          <Ellipse color="#5EDDA7"/>
          <Ellipse color="#30DD93"/>
        </div>
        <h4 style={{ margin: "50px 0 40px 0"}}>Твой личный путеводитель на первые три месяца:</h4>
      </div>
      <div className={classes.formatedText} style={{ position: "relative" }}>
        <WayImg />
        <div style={{ 
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: "30px",
          padding: "0 26px 0 103px",
          position: "absolute",
          top: "27%",
          width: "100%"
        }}>
          <FrameItems title="1 день:" text={"Оформление документов\nWelcome-тренинг\nЗнакомство с командой и наставником\nЗнакомство с индивидуальным планом адаптации"}/>
          <FrameItems title="1 неделя:" text={"Изучение книги новичка\nИзучение положений и процессов компаний\nДонастройка программ и доступов"}/>
          <FrameItems title="2 неделя:" text={"Встреча с HR: обсуждение впечатлений по итогам 2-ух недель"}/>
          <FrameItems title="1,5 месяца:" text={"Экватор: поделимся обратной связью о успехах, разберем сложности"}/>
          <FrameItems title="3 месяца:" text={"Закрытие испытательного срока: подведение итогов"}/>
        </div>
      </div>
    </div>
  )
}

export { AdaptationProgramPage };