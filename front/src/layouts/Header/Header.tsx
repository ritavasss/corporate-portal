import { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import clsx from "clsx";

import { useStyles } from "./Header.styles";
import { LogoIcon, LogoutIcon } from "../../assets";
import { useAuth } from "@/modules/authentication/AuthContext";

const Header: FC = () => {
  const { classes } = useStyles();
  const { isAuthenticated, logout } = useAuth();
  
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const logoutButtonRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (logoutButtonRef.current && !logoutButtonRef.current.contains(event.target as Node)) {
      setShowLogoutButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div className={classes.header}>
      <div className={classes.headerContent}>
        <Link to="/">
          <LogoIcon />
        </Link>
        {isAuthenticated && (
          <div className={classes.logoutWrapper}>
            <div
              onClick={() => setShowLogoutButton(prev => !prev)}
              className={clsx(classes.loginButton)}
            >
              <LogoutIcon />
            </div>
            {showLogoutButton && (
              <div ref={logoutButtonRef} className={classes.logoutButtonContainer}>
                <Button
                  onClick={logout}
                  className={classes.logoutButton}
                >
                  Выход
                </Button>
              </div>
            )}
          </div>
        )}
        {!isAuthenticated && (
          <Tooltip title="Войти" classes={{ tooltip: classes.tooltip }}>
            <Link to="/login">
              <div className={clsx(classes.loginButton, { isNotAuthenticated: !isAuthenticated})}>
                <LogoutIcon />
              </div>
            </Link>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export { Header };