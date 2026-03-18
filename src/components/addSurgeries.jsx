import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./addSugeries.module.css";

import Swal from "sweetalert2";

const Addsurgery = () => {
  const [patientFullName, setPatientFullName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [surgeryDate, setSurgeryDate] = useState("");
  const [stentRemovalDate, setStentRemovalDate] = useState("");
  const [patientReminder, setPatientReminder] = useState(false);
  const [doctorReminder, setDoctorReminder] = useState(false);

  const [errors, setErrors] = useState({});
  const [surgeryList, setSurgeryList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("surgeryList");
    if (savedData) {
      setSurgeryList(JSON.parse(savedData));
    }
  }, []);

  const nameRegex = /^[a-zA-Z\s'-]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validateForm = () => {
    const newErrors = {};

    if (!patientFullName.trim()) {
      newErrors.patientFullName = "Patient full name is required.";
    } else if (!nameRegex.test(patientFullName)) {
      newErrors.patientFullName = "Name must contain only letters and spaces.";
    }

    if (!patientNumber.trim()) {
      newErrors.patientNumber = "Patient number is needed.";
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
    }

    if (!surgeryDate) {
      newErrors.surgeryDate = "Surgery date is required.";
    }

    if (!stentRemovalDate) {
      newErrors.stentRemovalDate = "Stent removal date is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newSurgery = {
        patientFullName,
        patientNumber,
        phoneNumber,
        surgeryDate,
        stentRemovalDate,
        patientReminder,
        doctorReminder,
      };

      const updatedList = [...surgeryList, newSurgery];
      setSurgeryList(updatedList);
      localStorage.setItem("surgeryList", JSON.stringify(updatedList));
      console.log("updatedList:", updatedList);
      Swal.fire("Surgery details saved ✅");

      // Reset fields
      setPatientFullName("");
      setPatientNumber("");
      setPhoneNumber("");
      setSurgeryDate("");
      setStentRemovalDate("");
      setPatientReminder(false);
      setDoctorReminder(false);

      // Redirect to surgeries table
      navigate("/dashboard");
    } else {
    }
  };

  return (
    <div className={styles.addSurgery}>
      <form onSubmit={handleSubmit} className={styles.formCard}>
        <div className={styles.formRow}>
          <h2 className="text-center">Add Surgery</h2>

          <div className={styles.formGroup}>
            <label>Patient Full Name:</label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              value={patientFullName}
              onChange={(e) => setPatientFullName(e.target.value)}
            />
            {errors.patientFullName && (
              <p style={{ color: "red" }}>{errors.patientFullName}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Patient Number:</label>
            <input
              type="text"
              placeholder="Enter Patient Number"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
            />
            {errors.patientNumber && (
              <p style={{ color: "red" }}>{errors.patientNumber}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number:</label>
            <input
              type="text"
              placeholder="Enter your Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && (
              <p style={{ color: "red" }}>{errors.phoneNumber}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Type of Surgeries:</label>
            <input
              type="text"
              placeholder="Enter Surgeries"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && (
              <p style={{ color: "red" }}>{errors.phoneNumber}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Surgery Date:</label>
            <input
              placeholder="Enter your Surgery Date"
              type="date"
              value={surgeryDate}
              onChange={(e) => setSurgeryDate(e.target.value)}
            />

            {errors.surgeryDate && (
              <p style={{ color: "red" }}>{errors.surgeryDate}</p>
            )}
          </div>
          <button className={`btn btn-primary ${styles.saveBtn}`} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addsurgery;
