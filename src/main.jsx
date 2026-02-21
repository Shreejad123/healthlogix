// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./components/registrationForm";
import LoginForm from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import AddSurgery from "./components/addSurgeries";
import Dashboard from "./components/dashboard";
import SurgeryTable from "./components/surgeryTable";
import EditSurgery from "./components/editSurgeries";
import PatientDetails from "./components/patientDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-surgery" element={<AddSurgery />} />
        <Route path="/SurgeryTable" element={<SurgeryTable />} />
        <Route path="/edit-surgery/:index" element={<EditSurgery />} />
        <Route path="/patient/:index" element={<PatientDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
