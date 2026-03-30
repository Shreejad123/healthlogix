import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./editSurgeries.module.css";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditSurgery = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const [surgeryList, setSurgeryList] = useState([]);
  const [surgery, setSurgery] = useState({
    patientFullName: "",
    patientNumber: "",
    phoneNumber: "",
    surgeryDate: "",
  });

  const convertToInputDate = (dateString) => {
    if (!dateString) return "";
    if (dateString.includes("-")) return dateString;
    const [day, month, year] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const savedData = localStorage.getItem("surgeryList");
    if (savedData) {
      const list = JSON.parse(savedData);
      setSurgeryList(list);

      const selected = list[index];
      if (selected) {
        selected.surgeryDate = convertToInputDate(selected.surgeryDate);
        selected.stentRemovalDate = convertToInputDate(
          selected.stentRemovalDate,
        );
        setSurgery(selected);
      }
    }
  }, [index]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSurgery((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedList = [...surgeryList];
    updatedList[index] = surgery;

    setSurgeryList(updatedList);
    localStorage.setItem("surgeryList", JSON.stringify(updatedList));
    toast.success("surgery details updated sucessfully!", { autoClose: 1000 });
    setTimeout(() => {
      navigate("/patientTable");
    }, 1500);
  };

  return (
    <div>
      <div className={styles.editsurgeriesContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <h2 className>Edit Surgery</h2>
            <div className>
              <label>Patient Full Name:</label>
              <input
                type="text"
                className
                name="patientFullName"
                value={surgery.patientFullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Patient Number:</label>
              <input
                type="text"
                name="patientNumber"
                value={surgery.patientNumber}
                onChange={handleChange}
              />
            </div>
            <div className>
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={surgery.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className>
              <label>Type of Surgery:</label>
              <input
                type="text"
                className
                name="Email"
                value={surgery.surgery}
                onChange={handleChange}
              />
            </div>
            <div className={styles.button}>
              <button
                type="submit"
                className={`btn btn-danger ${styles.myBtn}`}
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className={`btn btn-info ${styles.myBtn}`}
              >
                Cancel
              </button>
            </div>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default EditSurgery;
