import { Link } from "react-router-dom"

import { useStyles } from "./BackButton.styles";
import { ArrowBackIcon } from "../../../../assets";

type BackButtonProps ={
  path?: string,
  width?: string,
  height?: string,
}
export const BackButton = ({path, width = "150px", height = "58px"} : BackButtonProps) => {
  const {classes} = useStyles();

  return (
    <Link
      to={path || "/"}
      className={classes.buttonContainer}
      style={{ width: width, height: height }}
    >
      <div className={classes.backButton}>
        <ArrowBackIcon width={width !== "150px" ? "51.5px" : ""} height={height !== "58px" ? "23px" : ""}/>
      </div>
    </Link>
  )
}