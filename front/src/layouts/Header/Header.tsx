import { FC } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

import { useStyles } from "./Header.styles";
import { LogoIcon, LogoutIcon } from "../../assets";

const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.headerContent}>
        <Link to="/">
          <LogoIcon />
        </Link>
        <Tooltip title="Войти">
          <Link to="/login">
            <div className={classes.loginButton}>
              <LogoutIcon />
            </div>
          </Link>
        </Tooltip>
      </div>
    </div>
  )
}

export { Header }