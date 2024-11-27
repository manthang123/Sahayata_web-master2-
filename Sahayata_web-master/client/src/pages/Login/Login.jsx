import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () =>{


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  // Hardcoded admin credentials
  const adminCredentials = {
    username: "admin", // Replace with your desired username
    password: "admin123", // Replace with your desired password
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === adminCredentials.username && password === adminCredentials.password) {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid username or password");
      setUsername("");
      setPassword("");
    }
  };
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
      fontFamily: "'Poppins', Arial, sans-serif",
      background: "linear-gradient(135deg, #8e44ad, #3498db)",
    },
    box: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(15px)",
      padding: "2.5rem",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      width: "90%",
      maxWidth: "400px",
      textAlign: "center",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "2rem",
      color: "#fff",
      fontWeight: "bold",
    },
    inputGroup: {
      marginBottom: "1.5rem",
      textAlign: "left",
    },
    label: {
      display: "block",
      fontWeight: "600",
      marginBottom: "0.5rem",
      color: "#fff",
    },
    input: {
      width: "100%",
      padding: "0.9rem",
      border: "none",
      borderRadius: "10px",
      background: "rgba(255, 255, 255, 0.8)",
      fontSize: "1rem",
      color: "#333",
      boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
    },
    inputFocus: {
      outline: "none",
      border: "2px solid #3498db",
      background: "#fff",
      boxShadow: "0 0 8px rgba(52, 152, 219, 0.5)",
    },
    button: {
      width: "100%",
      padding: "0.9rem",
      border: "none",
      borderRadius: "10px",
      background: "#3498db",
      color: "white",
      fontSize: "1.1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s ease, transform 0.2s ease",
      boxShadow: "0 4px 15px rgba(52, 152, 219, 0.5)",
    },
    buttonHover: {
      background: "#2980b9",
    },
    links: {
      marginTop: "1.5rem",
      color: "#fff",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "0.9rem",
      margin: "0 0.5rem",
      transition: "color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.background = styles.buttonHover.background)
            }
            onMouseOut={(e) =>
              (e.target.style.background = styles.button.background)
            }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

