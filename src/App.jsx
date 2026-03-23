import Header from "./components/Header";
import { ToastMessageContainer } from "./components/ToastMessage";
import Addsurgery from "./components.addSurgery";
import { Suspense, lazy } from "react";
const Registration = lazy(() => import("./components/registrationForm"));
const LandingPage = lazy(() => import("./components/landingPage"));
const Addsurgery = lazy(() => import("./components.addSurgery"));
function App() {
  return (
    <>
      <Header></Header>
      <Suspense
        fallback={<div>Registration page is loading please wait...</div>}
      >
        <Registration />
      </Suspense>
      <Suspense
        fallback={<div>LandingPage page is loading please wait...</div>}
      >
        <LandingPage />
      </Suspense>
      <ToastMessageContainer />
      <Suspense
        fallback={<div>Add surgery page is loading please wait...</div>}
      >
        <Addsurgery />
      </Suspense>
    </>
  );
}

export default App;
