// main.jsx
import React from "react";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/registrationForm";
import LoginForm from "./components/login";
import ForgotPassword from "./components/forgotPassword";
import LandingPage from "./components/landingPage";
const AddSurgery = lazy(() => import("./components/addSurgeries"));
import Dashboard from "./components/dashboard";
import SurgeryTable from "./components/surgeryTable";
import EditSurgery from "./components/editSurgeries";
import PatientDetails from "./components/patientDetails";
import PrivateRoute from "./components/privateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/add-surgery"
          element={
            <Suspense fallback={<h2>Loading Add Surgery...</h2>}>
              <AddSurgery />
            </Suspense>
          }
        />
        <Route path="/login" element={<LoginForm />} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<LandingPage />} />
        <Route path="/SurgeryTable" element={<SurgeryTable />} />
        <Route path="/edit-surgery/:index" element={<EditSurgery />} />
        <Route path="/patient/:index" element={<PatientDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
