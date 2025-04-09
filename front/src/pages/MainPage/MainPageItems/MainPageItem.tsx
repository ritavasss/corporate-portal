import { useState } from "react";
import { DottedOutline } from "../../../assets/images/DottedOutline/DottedOutline";
import { useStyles } from "./MainPageItem.styles";

type Props = {
  title: string,
  picture?: any,
  rotationAngle?: number,
  onClick?: () => void;
}
const MainPageItem = ( {title, onClick, picture, rotationAngle}: Props ) => {

  const { classes } = useStyles();
  const [rotate, setRotate] = useState(false);

  const handleMouseEnter = () => setRotate(true);
  const handleMouseLeave = () => setRotate(false);

  return (
    <div className={classes.card} onClick={onClick}>
      <h4 className={classes.cardTitle}>{title}</h4>
      <div className={classes.cardContent}>
        <div className={classes.cardOutline}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
          <DottedOutline width={"100%"} height={"100%"}/>
        </div>
        <div className={classes.cardPicture} style={{ transform: `rotate(${rotate ? 0 : rotationAngle}deg)` }}>
          {picture}
        </div>
      </div>
      
      
    </div>
  )
}

export { MainPageItem} 