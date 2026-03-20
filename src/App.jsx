import Registration from "./components/registrationForm";
import Header from "./components/Header";
import { ToastMessageContainer } from "./components/ToastMessage";
import LandingPage from "./components/landingPage";
import Addsurgery from "./components.addSurgery";

function App() {
  return (
    <>
      <Header></Header>
      <Registration></Registration>
      <LandingPage></LandingPage>
      <ToastMessageContainer />
      <Addsurgery></Addsurgery>
    </>
  );
}

export default App;
