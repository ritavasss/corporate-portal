import api from "@/services/Auth/authService";
import React, { useState } from "react";

type Props = {
  onLogin: () => void;
};

const RegisterPage: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { username, password }, {
        withCredentials: true,
      });

      const token = res.data;
      localStorage.setItem("token", token);
      setError(null);
      onLogin();
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export { RegisterPage };
