import NavBar from "./navBar.jsx";
import SurgeryTable from "./surgeryTable";
import Footer from "./Footer";
import styles from "./patientTable.module.css";
function PatientTable() {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <div className={styles.content}>
        <SurgeryTable></SurgeryTable>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default PatientTable;
