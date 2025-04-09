import { FC } from "react";
import { BackButton } from "../../components/common/BackButton/BackButton";
import { useStyles } from "../CommonPages.style";
import { Ellipse } from "../../components/common/Ellipse/Ellipse";
import { PictureComp } from "../../components/common/PictureComp/PictureComp";
import { ReferalProgramImg } from "../../assets/images/ReferalProgramImg/ReferalProgramImg";
import { DottedOutline3 } from "../../assets/images/DottedOutline/DottedOutline";


const ReferalProgramPage: FC = () => {
  const { classes } = useStyles({ markerColor: "#FFB5A0" });
  return (
    <div className="pageContent">
      <BackButton />
      <div className={classes.picture}>
        <PictureComp 
          firstItem={<ReferalProgramImg width={"734px"} height={"495px"}/>}
          color="#FF9678"
        />
      </div>
      <div className={classes.formatedText}>
        <h2>Реферальная программа</h2>
        <p>У нас есть акция "ПРИВЕДИ ДРУГА".</p>
        <p>Вознаграждение происходит согласно грейдам:</p>
        <ul>
          <li>Уровня K1 – 20 тыс. руб., K2 – 60 тыс, K3 – 100 тыс</li>
          <li>Тим-лиды, эксперты – по договоренности</li>
        </ul>
        <p>Оценку грейда будут определять на собеседовании или по результатам тестового задания.</p>
        <p>Выплата премии – 50% при устройстве друга на работу, 50% после 6 месяцев работы в компании.</p>
        <p>По вопросам наличия друзей обращаться к:</p>
        <ul>
          <li>Менеджеру по персоналу</li>
        </ul>
        <p>Важно! Контакты друзей нужно передавать лично, не через отклик на HH.ru или другие ресурсы.</p>
      </div>
      <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "56px" }}>
        <div><DottedOutline3 width={"100%"} height={"100%"}/></div>
        <div style={{ display: "flex", justifyContent: "center", gap: "76px", marginTop: "4px", position: "absolute" }}>
          <Ellipse color="#FFB5A0"/>
          <Ellipse color="#FF9678"/>
          <Ellipse color="#FF815E"/>
        </div>
      </div>
    </div>
  )
}

export { ReferalProgramPage };