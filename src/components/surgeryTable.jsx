import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import SurgerySearch from "./searchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./surgeryTable.module.css";
import { ClipLoader } from "react-spinners";

const Table = lazy(() => import("./Table"));
const SurgeryTable = () => {
  const navigate = useNavigate();
  const [surgeryList, setSurgeryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("surgeryList");
    if (savedData) {
      setSurgeryList(JSON.parse(savedData));
    }
  }, []);

  const filteredSurgeries =
    searchTerm.trim() === ""
      ? surgeryList
      : surgeryList.filter((surgery) =>
          surgery.patientFullName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
        );

  const handleAddClick = () => {
    navigate("/add-surgery");
  };

  const handleEdit = (index) => {
    navigate(`/edit-surgery/${index}`);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const updatedList = surgeryList.filter((_, i) => i !== index);
      setSurgeryList(updatedList);
      localStorage.setItem("surgeryList", JSON.stringify(updatedList));
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const handleLogout = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    localStorage.removeItem(isLoggedIn);
    navigate("/login");
  };
  return (
    <>
      {" "}
      <div className={styles.logout}>
        <button className="btn btn-primary" onClick={handleLogout}>
          logout
        </button>
      </div>
      <div className={styles.dashboardContainer}>
        <h1 className={styles.header}>Surgeries</h1>
        <div className={styles.filter}>
          <SurgerySearch searchTerm={searchTerm} handleSearch={handleSearch} />
          <select>
            <option value="asc">Sort by Price low to High:</option>
            <option value="desc">Sort by Price High to Low:</option>
          </select>
          <button
            onClick={handleAddClick}
            className={`btn btn-primary ${styles.customBtn}`}
          >
            Add Surgery
          </button>
        </div>
        <Suspense
          fallback={
            <div>
              {" "}
              <ClipLoader />
            </div>
          }
        >
          {surgeryList.length === 0 ? (
            <p style={{ color: "red", marginTop: "20px" }}>
              No surgeries added yet.
            </p>
          ) : (
            <>
              {filteredSurgeries.length > 0 ? (
                <Table
                  surgeryList={filteredSurgeries}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ) : (
                <p style={{ color: "red", marginTop: "20px" }}>
                  No surgeries found for "{searchTerm}"
                </p>
              )}
            </>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default SurgeryTable;
