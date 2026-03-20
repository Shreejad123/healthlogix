import loginImage from "../assets/doctor.jpg";
import NavBar from "./navBar";
function LandingPage() {
  return (
    <>
      <div>
        <div>
          <NavBar></NavBar>
          <img src={loginImage} alt="Background" />
        </div>
      </div>
    </>
  );
}
export default LandingPage;
