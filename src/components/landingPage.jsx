import LineChart from "./lineChart";
import PieChart from "./pieChart";
import NavBar from "./navBar";
import styles from "./landingPage.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className={styles.heroSection}>
          <LineChart></LineChart>
          <PieChart></PieChart>
        </div>

        <Footer />
      </div>
    </>
  );
}
export default LandingPage;
