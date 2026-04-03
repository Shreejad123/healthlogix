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
  // const [sortConfig, setSortConfig] = useState({
  //   key: null,
  //   direction: "ascending",
  // });
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
    navigate(`/edit-patient/${index}`);
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
  // const handleLogout = () => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   localStorage.removeItem(isLoggedIn);
  //   navigate("/login");
  // };
  // const sortData = (items, config) => {
  //   const sortedItems = [...items]; // Create a copy
  //   if (config.key !== null) {
  //     sortedItems.sort((a, b) => {
  //       if (a[config.key] < b[config.key]) {
  //         return config.direction === "ascending" ? -1 : 1;
  //       }
  //       if (a[config.key] > b[config.key]) {
  //         return config.direction === "ascending" ? 1 : -1;
  //       }
  //       return 0;
  //     });
  //   }
  //   return sortedItems;
  // };

  const handleSorting = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  // const filteredAndSortedSurgeries = surgeryList
  //   .filter(filteredSurgeries)
  //   .sort(handleSorting);
  return (
    <>
      <div className={styles.dashboardContainer}>
        <h2 className={styles.header}>Surgeries</h2>
        <div className={styles.filter}>
          <SurgerySearch searchTerm={searchTerm} handleSearch={handleSearch} />
          <select onChange={() => handleSorting("patientfullName")}>
            <option value="asc">Sort by Patient Name A to Z:</option>
            <option value="desc">Sort by Patient Name Z to A :</option>
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
