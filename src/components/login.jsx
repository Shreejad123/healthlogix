// LoginForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import loginImage from "../assets/image.png";
import Swal from "sweetalert2";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    // Email validation (simple regex)
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
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
      const loginDetails = {
        email,
        password,
      };
      console.log("loginDetails", loginDetails);
      Swal.fire("Login sucessful!");

      console.log("Logging in with:", { email, password });
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <div id="loginView" className={styles.loginContainer}>
        <div className={styles.branding}>
          <img src={loginImage} alt="Background" />
        </div>
        <div className={styles.auth}>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <h5 className={styles.loginHeader}>Hospital Management System</h5>
            <hr className={styles.styledLine}></hr>
            <h6 className={styles.header}>Login</h6>
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
          </form>
          {/* <div className={styles.forgotPassword}>
            <a href="/Forgotpassword">Forgot Password?</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
