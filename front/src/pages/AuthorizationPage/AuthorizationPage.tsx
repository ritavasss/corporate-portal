import { FC } from "react";

import { Button, InputBase } from "@mui/material";
import { useStyles } from "./AuthorizationPage.styles";
import { BackButton } from "@/modules/common/components";

const AutorizationPage : FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.contentContainer}>
      <div className={classes.backButton}><BackButton width="83.5px" height="38px"/></div>
      <div className={classes.authorizationContainer}>
        <InputBase
          className={classes.input}
          placeholder="Логин"
        />
        <InputBase
          className={classes.input}
          placeholder="Пароль"
        />
        <div className={classes.description}>* Вход только для сотрудников HR-отдела</div>
        <Button className={classes.button}>Войти</Button>
      </div>
    </div>
  )
}

export { AutorizationPage };