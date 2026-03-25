import loginImage from "../assets/doctor.jpg";
import NavBar from "./navBar";
import styles from "./landingPage.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className={styles.landingPage}>
          <div className={styles.heroSection}>
            <h2 className={styles.header}>
              Streamline Your Surgery <br></br>Management
            </h2>
            <p className={styles.paragraph}>
              Simplify scheduling and managing surgeries with our all-in-one
              solution for hospitals. From patient records to surgery scheduling
              — everything in one place, fast and secure. Easily book and manage
              surgery appointments with an intuitive interface. Keep track of
              patient information,surgery details.
            </p>
            <button className="btn btn-info" onClick={() => navigate("/login")}>
              Get Started
            </button>
          </div>
          <img src={loginImage} alt="Background" className={styles.image} />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default LandingPage;
