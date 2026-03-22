// LoginForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import loginImage from "../assets/doctorImage.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        alert("No user found. Please signup first.");
        return;
      }

      if (storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("isLoggedIn", "true");

        toast.success("logging in!", { autoClose: 1000 });
        navigate("/dashboard");
        console.log("Logging in with:", { email, password });
      } else {
        toast.error("Invalid email or password", { autoClose: 1000 });
      }
    }
  };
  return (
    <div>
      <div id="loginView" className={styles.loginContainer}>
        <div className={styles.branding}>
          <h4 className={styles.loginHeader}>Hospital Management System</h4>
          <img src={loginImage} alt="Background" className={styles.image} />
        </div>
        <div className={styles.auth}>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <h4 className={styles.header}>Login</h4>
            <div>
              <div className={styles.email}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
                {errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>
            </div>
            <div className={styles.password}>
              <div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              {" "}
              <button
                type="submit"
                className={`btn btn-primary ${styles.loginBtn}`}
              >
                Sign In
              </button>
            </div>
            <p className={styles.signup}>
              Don't have an account? <Link to="/registration">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
