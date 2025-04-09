import { FC } from "react";
import { useStyles } from "./Header.styles";
import { LogoIcon } from "../../assets/icons/LogoIcon/Logo";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.headerContent}>
        <Link to="/">
          <LogoIcon />
        </Link>
        {/*<h2 className={classes.headerName}>Stickers</h2>*/}
      </div>
    </div>
  )
}

export { Header }