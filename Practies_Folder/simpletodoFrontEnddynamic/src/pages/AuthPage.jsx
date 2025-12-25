import { useState } from "react";
import LoginForm from "../components/LoginPage";
import RegisterForm from "../components/RegisterForm";
export default function AuthPage() {
  const [mode, setMode] = useState("login"); // login | register

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{mode === "login" ? "Login" : "Register"}</h2>

        {mode === "login" ? <LoginForm /> : <RegisterForm />}

        <p style={styles.switch}>
          {mode === "login" ? "New user?" : "Already have an account?"}
          <span
            style={styles.link}
            onClick={() =>
              setMode(mode === "login" ? "register" : "login")
            }
          >
            {mode === "login" ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  card: {
    width: "350px",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  switch: {
    marginTop: "10px",
    textAlign: "center",
  },
  link: {
    color: "blue",
    cursor: "pointer",
    marginLeft: "5px",
  },
};
