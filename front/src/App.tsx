import "./App.css";
import { AuthProvider } from "./modules/authentication/AuthContext";
import { AppRoutes } from "./routes";

function App() {
  
  return (
    <div className="app">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
