import { FC } from "react";
import { BackButton } from "../../components/common/BackButton/BackButton";
import { RedmineLaborImg } from "../../assets/images/RedmineLaborImg/RedmineLaborImg";
import { useStyles } from "../CommonPages.style";
import { PictureComp } from "../../components/common/PictureComp/PictureComp";
import { Ellipse } from "../../components/common/Ellipse/Ellipse";
import { DottedOutline3 } from "../../assets/images/DottedOutline/DottedOutline";


const RedmineLaborPage: FC = () => {

  const { classes } = useStyles({ markerColor: "#1F8D75" });
  const currentYear = new Date().getFullYear();

  return (
    <div className="pageContent">
      <BackButton />
      <div className={classes.picture}>
        <PictureComp 
          firstItem={<RedmineLaborImg width={"734px"} height={"495px"}/>}
          color="#78D3BF"
        />
      </div>
      <div className={classes.formatedText}>
        <h2>Трудозатраты в Redmine</h2>
        <h3>Инструкция по заполнению трудозатрат в Redmine</h3>
        <p>Периодичность:</p>
        <ul>
          <li>Трудозатраты заносятся в Redmine не реже одного раза в неделю.</li>
          <li>За прошлый месяц трудозатраты должны быть занесены не позднее, чем 1-ое число месяца, следующего за отчетным.</li>
        </ul>
        <p>Правила ведения затрат:</p>
        <ul>
          <li>Трудозатраты заносятся в разрезе дней и задач.</li>
          <li>Гранулярность одной записи о трудозатратах – не менее 0.5 ч. Не нужно делать отдельные списания затрат менее 0.5 ч.ч, 
              Небольшие (менее 0.5 ч.) отвлечения можно прибавить к другой задаче.
          </li>
          <li>При занесении затрат необходимо заполнять поле «Комментарий» поле комментарий должно содержать 
              краткое описание работ и достигнутый результат.
          </li>
          <li>Сумма за месяц должна быть равна количеству рабочих часов месяца (кол-во рабочих дней в месяце*8). 
              Количество рабочих часов месяца можно посмотреть в производственном календаре (
              <a href={`http://www.consultant.ru/law/ref/calendar/proizvodstvennye/${currentYear}`} target="_blank">
                http://www.consultant.ru/law/ref/calendar/proizvodstvennye/{currentYear}
              </a>
              ). При наличии сомнений по количеству рабочих часов 
              в месяце сотрудник должен обратиться к ЛР (линейный руководитель) и уточнить эту информацию.
          </li>
          <li>Не нужно заносить никакие переработки (ни оплачиваемые, ни неоплачиваемые переработки) в Redmine 
              – если иное явно не было указано руководителем соответствующего проекта.
          </li>
          <li>Дни отпуска списываются на 
            <a href="http://redmine" target="_blank"> http://redmine/...</a>
            . При этом списываются только дни отпуска, 
              попадающие на рабочие дни.
          </li>
          <li>Больничные списываются на 
            <a href="http://redmine" target="_blank"> http://redmine/...</a>
            . При этом списываются только дни больничного, попадающие на рабочие дни.
          </li>
          <li>Простои, связанные с недостаточной обеспеченностью проектными задачами, списываются на задачу 
            <a href="http://redmine" target="_blank"> http://redmine/...</a>.
          </li>
        </ul>
      </div>
      <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
        <div><DottedOutline3 width={"100%"} height={"100%"}/></div>
        <div style={{ display: "flex", justifyContent: "center", gap: "76px", marginTop: "4px", position: "absolute" }}>
          <Ellipse color="#81B8AC"/>
          <Ellipse color="#78D3BF"/>
          <Ellipse color="#5EE8CA"/>
        </div>
      </div>
    </div>
  )
}

export { RedmineLaborPage };