// main.jsx
import React from "react";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/registrationForm";
import LoginForm from "./components/login";
import ForgotPassword from "./components/forgotPassword";

import LandingPage from "./App";
const AddSurgeryPage = lazy(() => import("./components/addSurgeryPage"));
const PatientTable = lazy(() => import("./components/patientTable"));
import { ThemeProvider } from "./context/ThemeContext";
import EditPatient from "./components/editPatient";
import Patient from "./components/patient";
import PrivateRoute from "./components/privateRoute";
import "./App.css";
import StatsCard from "./components/statsCard";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route
            path="/add-surgery"
            element={
              <Suspense fallback={<h2>Loading Add Surgery...</h2>}>
                {" "}
                <AddSurgeryPage />
              </Suspense>
            }
          />

          <Route
            path="/login"
            element={
              <Suspense fallback={<h2>Loading Login page...</h2>}>
                <LoginForm />
              </Suspense>
            }
          />
          <Route path="/" element={<LoginForm />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/PatientTable"
            element={
              <PrivateRoute>
                <Suspense fallback={<h2>Loading Surgery table...</h2>}>
                  <PatientTable />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path="/LandingPage"
            element={
              <PrivateRoute>
                <Suspense fallback={<h2>Loading Dashboard...</h2>}></Suspense>
                <LandingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-patient/:index"
            element={
              <PrivateRoute>
                <EditPatient />
              </PrivateRoute>
            }
          />
          <Route
            path="/patient/:index"
            element={
              <PrivateRoute>
                <Patient />
              </PrivateRoute>
            }
          />
          <Route
            path="/statsCard"
            element={
              <PrivateRoute>
                <StatsCard />
              </PrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
