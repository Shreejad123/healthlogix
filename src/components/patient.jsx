import NavBar from "./navBar.jsx";
import PatientDetails from "./patientDetails";
import Footer from "./Footer";
import styles from "./patient.module.css";
function Patient() {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <div className={styles.content}>
        <PatientDetails></PatientDetails>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Patient;
