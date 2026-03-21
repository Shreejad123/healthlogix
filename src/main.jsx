// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/registrationForm";
import LoginForm from "./components/login";
import ForgotPassword from "./components/forgotPassword";
import AddSurgery from "./components/addSurgeries";
import Dashboard from "./components/dashboard";
import LandingPage from "./components/landingPage";
import SurgeryTable from "./components/surgeryTable";
import EditSurgery from "./components/editSurgeries";
import PatientDetails from "./components/patientDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-surgery" element={<AddSurgery />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/SurgeryTable" element={<SurgeryTable />} />
        <Route path="/edit-surgery/:index" element={<EditSurgery />} />
        <Route path="/patient/:index" element={<PatientDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
