import { FC } from "react";

import { BackButton, Ellipse, PictureComp } from "../../components";
import { EquipmentRemovalImg } from "../../assets/images";
import { useStyles } from "../CommonPages.style";


const EquipmentRemovalPage: FC = () => {

  const { classes } = useStyles({ markerColor: "#FFD1AC" });

  return (
    <div className="pageContent">
      <BackButton />
      <div >
        <div className={classes.picture}>
          <PictureComp 
            firstItem={<EquipmentRemovalImg width={"734px"} height={"495px"}/>}
            color="#FBB985"
          />
        </div>
        <div className={classes.formatedText}>
          <h2>Вынос оборудования</h2>
          <p>Если ты работаешь удаленно, а стационарный компьютер (монитор или другое нужное оборудование) в офисе – ты можешь забрать их домой.</p>
          <p>Что для этого необходимо:</p>
          <ul>
            <li>Согласовать вынос техники со своим руководителем</li>
            <li>Отправить информацию о том, какое оборудование хочешь забрать</li>
            <li>Офис-менеджер составляет акт приема передачи и ТМЦ на вынос, затем пишет тебе, что вынос согласован и вы обговариваете дату забора оборудования</li>
            <li>В день, когда забираешь оборудование – подписываешь акт выдачи</li>
          </ul>
          <div style={{ display: "flex", justifyContent: "center", gap: "76px", marginTop: "28px"}}>
            <Ellipse color="#FFD1AC"/>
            <Ellipse color="#FBB985"/>
            <Ellipse color="#FCA762"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export { EquipmentRemovalPage };