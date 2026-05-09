import styles from "./App.module.css";
import { Suspense, lazy } from "react";
import NavBar from "./components/navBar";
const LineChart = lazy(() => import("./components/lineChart"));
const PieChart = lazy(() => import("./components/pieChart"));
import StatsCard from "./components/statsCard";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Footer from "./components/Footer";
import { ClipLoader } from "react-spinners";
function LandingPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.heroContainer}>
        <div className={styles.stat}>
          <StatsCard />
          <ThemeToggleButton className={styles.theme} />
        </div>
      </div>
      <div className={styles.heroSection}>
        <Suspense
          fallback={
            <h2>
              {" "}
              <div>
                <ClipLoader />
              </div>
              Loading ...
            </h2>
          }
        >
          <LineChart className={styles.lineChart}></LineChart>
          <PieChart></PieChart>
        </Suspense>
      </div>

      <Footer />
    </>
  );
}
export default LandingPage;
