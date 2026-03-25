import styles from "./footer.module.css";
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/hospitalLogo.png";
function footer() {
  return (
    <>
      <article>
        <footer className={styles.footer}>
          <h5 className={styles.Header} onClick={() => navigate("/")}>
            <img
              src={loginImage}
              alt="Background"
              width={100}
              height={100}
              onClick={() => navigate("/")}
              className={styles.image}
            />
          </h5>
          <p className={styles.paragraph}>
            Manage and track all surgeries <br></br>efficiently in one place{" "}
            <br></br>
            Digitizing surgery operations<br></br> for modern healthcare
          </p>
          <ol className={styles.links}>
            <li>Quick Links</li>
            <li>Home</li>
            <li>Login</li>
            <li>Sign Up</li>
            <li>Add Patient</li>
          </ol>
        </footer>
        <p className={styles.hospital}>©Hopsital Mangement 2026</p>
      </article>
    </>
  );
}
export default footer;
