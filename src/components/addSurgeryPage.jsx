import NavBar from "./navBar.jsx";
import AddSurgery from "./addSurgeries.jsx";
import Footer from "./Footer";
import styles from "./patientTable.module.css";
function AddSurgeryPage() {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <div className={styles.content}>
        <AddSurgery></AddSurgery>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default AddSurgeryPage;
