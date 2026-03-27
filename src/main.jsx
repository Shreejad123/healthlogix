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
const SugeryTable = lazy(() => import("./components/surgeryTable"));

import EditSurgery from "./components/editSurgeries";
import PatientDetails from "./components/patientDetails";
import PrivateRoute from "./components/privateRoute";
import PieChart from "./components/pieChart";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/add-surgery"
          element={
            <Suspense fallback={<h2>Loading Add Surgery...</h2>}>
              {" "}
              <AddSurgery />
            </Suspense>
          }
        />
        <Route path="/piechart" element={<PieChart />} />
        <Route path="/login" element={<LoginForm />} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/SugeryTable"
          element={
            <PrivateRoute>
              <Suspense fallback={<h2>Loading Surgery table...</h2>}>
                <SugeryTable />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route path="/" element={<LandingPage />} />
        <Route path="/edit-surgery/:index" element={<EditSurgery />} />
        <Route path="/patient/:index" element={<PatientDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
