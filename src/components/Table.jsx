import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./surgeryTable.module.css";
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const SurgeryTable = ({ surgeryList = [], onEdit, onDelete }) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(surgeryList.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = surgeryList.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    if (dateString.includes("/")) return dateString;
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleRowClick = (index) => {
    navigate(`/patient/${index}`);
  };

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.patientTable}>
          <tr>
            <th>Patient Name</th>
            <th>Patient No.</th>
            <th>Phone</th>
            <th>Surgery Date</th>
            <th>Type Of Surgery</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((surgery, index) => (
              <tr
                key={startIndex + index}
                onClick={() => handleRowClick(startIndex + index)}
              >
                <td>{surgery.patientFullName}</td>
                <td>{surgery.patientNumber}</td>
                <td>{surgery.phoneNumber}</td>
                <td>{formatDate(surgery.surgeryDate)}</td>
                <td>{surgery.surgery}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(startIndex + index);
                    }}
                  >
                    Edit &nbsp;
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(startIndex + index);
                    }}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete &nbsp;
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center", color: "red" }}>
                No surgeries found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div style={{ marginTop: "15px" }}>
          <button
            className={`btn btn-secondary ${styles.Btn}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack /> Previous
          </button>
          <span style={{ margin: "0 10px" }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`btn btn-secondary ${styles.Btn}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next <IoChevronForward />
          </button>
        </div>
      )}
    </div>
  );
};

export default SurgeryTable;
