import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./patientDetails.module.css";
import { IoPerson, IoCall } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { GiHeartPlus } from "react-icons/gi";
import { FaIdBadge } from "react-icons/fa";

const PatientDetails = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("surgeryList");
    if (savedData) {
      const list = JSON.parse(savedData);
      setPatient(list[index]);
    }
  }, [index]);

  if (!patient) {
    return <p className={styles.loading}>Loading patient details...</p>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Patient Details</h2>

        <div className={styles.detailRow}>
          <IoPerson className={styles.icon} />
          <div>
            <span className={styles.label}>Patient Name:</span>
            <span className={styles.value}>{patient.patientFullName}</span>
          </div>
        </div>

        <div className={styles.detailRow}>
          <FaIdBadge className={styles.icon} />
          <div>
            <span className={styles.label}>Patient Number:</span>
            <span className={styles.value}>{patient.patientNumber}</span>
          </div>
        </div>

        <div className={styles.detailRow}>
          <IoCall className={styles.icon} />
          <div>
            <span className={styles.label}>Phone:</span>
            <span className={styles.value}>{patient.phoneNumber}</span>
          </div>
        </div>

        <div className={styles.detailRow}>
          <MdDateRange className={styles.icon} />
          <div>
            <span className={styles.label}>Surgery Date:</span>
            <span className={styles.value}>{patient.surgeryDate}</span>
          </div>
        </div>

        <div className={styles.detailRow}>
          <GiHeartPlus className={styles.icon} />
          <div>
            <span className={styles.label}>Surgery Type:</span>
            <span className={styles.value}>{patient.surgery}</span>
          </div>
        </div>

        <button
          className={styles.backButton}
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
        <button
          className="btn btn-danger"
          onClick={() => navigate(`/edit-surgery/${index}`)}
        >
          Edit Patient
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
