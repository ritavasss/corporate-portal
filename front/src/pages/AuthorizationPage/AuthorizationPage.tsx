import { FC, useState } from "react";
import { Button, InputBase, Box, Typography } from "@mui/material";
import { useStyles } from "./AuthorizationPage.styles";
import { BackButton } from "@/modules/common/components";
import api from "@/services/Auth/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/modules/authentication/AuthContext";


const AuthorizationPage: FC = () => {
  const { classes } = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { setAuthState } = useAuth(); // Используем контекст
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { username, password }, {
        withCredentials: true,
      });

      const token = res.data;
      setAuthState(token); // Устанавливаем токен в контекст
      setError(null);
      navigate("/company-info/employees");
    } catch (err) {
      console.error(err);
      setError("Введен некорректный логин или пароль");
    }
  };

  return (
    <div className={classes.contentContainer}>
      <div className={classes.backButton}>
        <BackButton width="83.5px" height="38px" />
      </div>
      <div className={classes.authorizationContainer}>
        <InputBase
          className={classes.input}
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <InputBase
          className={classes.input}
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />

        {error && (
          <Box mt={1} mb={2}>
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          </Box>
        )}

        <Typography variant="body2" className={classes.description}>
          * Вход только для сотрудников HR-отдела
        </Typography>

        <Button
          className={classes.button}
          onClick={handleLogin}
          fullWidth
          variant="contained"
          color="primary"
        >
          Войти
        </Button>
      </div>
    </div>
  );
};

export { AuthorizationPage };
