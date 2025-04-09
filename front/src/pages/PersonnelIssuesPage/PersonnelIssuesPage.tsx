import { FC } from "react";

import { PictureComp } from "../../components/common/PictureComp/PictureComp";
import { PersonnelIssuesImg } from "../../assets/images/PersonnelIssuesImg/PersonnelIssuesImg";
import { Ellipse } from "../../components/common/Ellipse/Ellipse";
import { PersonnelIssuesImgForPageFirst, PersonnelIssuesImgForPageSecond } from "../../assets/images/PersonnelIssuesImg/PersonnelIssuesImgPage";
import { BackButton } from "../../components";
import { useStyles } from "../CommonPages.style";


const PersonnelIssuesPage: FC = () => {

  const {classes} = useStyles({ markerColor: "#FCD4DC"});

  return (
    <div className="pageContent">
      <BackButton />
      <div className={classes.sectionContainer} style={{ marginBottom: "52px"}}>
        <div className={classes.section1}>
          <h2 className="h2" style={{ marginBottom: "80px " }}>Больничный\отпуск\зарплата</h2>
          <h3 className="h3">Заработная плата</h3>
          <p>Заработная плата выплачивается на зарплатную карту:</p>
          <ul>
            <li>25 числа каждого месяца – аванс</li>
            <li>10 числа каждого месяца – окончательный расчет</li>
          </ul>
          <div style={{ display: "flex", justifyContent: "center", gap: "76px", marginTop: "65px" }}>
            <Ellipse color="#FCD4DC"/>
            <Ellipse color="#FEAABB"/>
            <Ellipse color="#FC8AA1"/>
          </div>
        </div>
        <div className={classes.section2}>
          <PictureComp 
            firstItem={<PersonnelIssuesImg width={"734px"} height={"495px"}/>}
            color={"#FEAABB"}
          />
        </div>
      </div>
      <div className={classes.sectionContainer} style={{ marginBottom: "52px"}}>
        <div className={classes.section2}>
          <div style={{ transform: "scaleX(-1)", display: "inline-block" }}>
            <PictureComp 
              firstItem={
              <div style={{ transform: "scaleX(-1)", display: "inline-block" }}>
                <PersonnelIssuesImgForPageFirst width={"734px"} height={"495px"}/>
              </div>
              }
              color={"#FEAABB"}
            />
          </div>
        </div>
        <div className={classes.section1}>
          <h3 className="h3">Как оформить больничный?</h3>
          <p>3 дня болезни оплачиваются как рабочие, если ты работаешь удаленно из дома. При более длительных отсутствиях нужно оформить больничный лист.</p>
          <ul>
            <li>Сообщить о больничном:<br /> своему руководителю и специалисту по кадрам <a
                href="https://t.me"
                target="_blank" >
                 @_kadr
              </a>
            </li>
            <li>Отправить электронный больничный:<br /> Специалисту по кадрам и бухгалтеру </li>
            <li>К кому обратиться, если нужно взять отгул:<br /> Согласовать со своим руководителем отсутствие и сообщить специалисту по кадрам, написать заявление</li>
          </ul>
        </div>
      </div>
      <div className={classes.sectionContainer}>
        <div className={classes.section1}>
          <h3 className="h3">Как поехать в отпуск?</h3>
          <p>Ежегодный оплачиваемый отпуск составляет 28 календарных дней. Отпуск предоставляется по графику отпусков 
             (составляется в конце каждого года на следующий год), изменение дат нужно согласовывать.
          </p>
          <ul>
            <li>Согласовать даты со своим руководителем</li>
            <li>Написать заявление через: <a
              href="https://hr-link.ru"
              target="_blank" >
              https://hr-link.ru
              </a>
            </li>
            <li>Дождаться согласования заявления, оформления приказа на отпуск</li>
            <li>Получить отпускные, хорошо отдохнуть</li>
          </ul>
        </div>
        <div className={classes.section2}>
          <PictureComp 
            firstItem={<PersonnelIssuesImgForPageSecond width={"734px"} height={"495px"}/>}
            color={"#FEAABB"}
          />
        </div>
      </div>
    </div>
  )
}

export { PersonnelIssuesPage };