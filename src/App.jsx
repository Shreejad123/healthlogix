import LineChart from "./components/lineChart";
import PieChart from "./components/pieChart";
import NavBar from "./components/navBar";
import styles from "./components/landingPage.module.css";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Footer from "./components/Footer";
function LandingPage() {
  return (
    <>
      <NavBar></NavBar>
      <ThemeToggleButton />
      <div className={styles.heroSection}>
        <LineChart></LineChart>
        <PieChart></PieChart>
      </div>

      <Footer />
    </>
  );
}
export default LandingPage;
