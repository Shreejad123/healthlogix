import styles from "./footer.module.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const handleLogout = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    localStorage.removeItem(isLoggedIn);
    navigate("/login");
  };

  return (
    <>
      <article>
        <footer className={styles.footer}>
          <h5 className={styles.header}>All Quick Links</h5>
          <ol className={styles.links}>
            <li onClick={() => navigate("/LandingPage")}>Home</li>
            <li onClick={() => navigate("/patientTable")}>Surgeries</li>
            <li onClick={handleLogout}> Logout</li>
          </ol>
        </footer>
        {/* <p className={styles.hospital}>©Hospital Mangement 2026</p> */}
      </article>
    </>
  );
}
export default Footer;
