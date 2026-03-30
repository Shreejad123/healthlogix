import NavBar from "./navBar.jsx";
import EditSurgeries from "./editSurgeries";
import Footer from "./Footer";
import styles from "./patientTable.module.css";
function PatientTable() {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <div className={styles.content}>
        <EditSurgeries></EditSurgeries>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default PatientTable;
