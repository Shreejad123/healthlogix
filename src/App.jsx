import LineChart from "./components/lineChart";
import PieChart from "./components/pieChart";
import NavBar from "./components/navBar";
import "./App.css";
import StatsCard from "./components/statsCard";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Footer from "./components/Footer";
function LandingPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="heroContainer">
        <div className="stat">
          <StatsCard />
          <ThemeToggleButton />
        </div>
      </div>
      <div className="heroSection">
        <LineChart></LineChart>
        <PieChart></PieChart>
      </div>

      <Footer />
    </>
  );
}
export default LandingPage;
