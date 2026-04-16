import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    toast.success("Redirecting to login page!", { autoClose: 10000 });
    setTimeout(() => {
      navigate("/");
    }, 2000);
    localStorage.removeItem(isLoggedIn);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className={styles.header}>
        <div onClick={handleClick} className={styles.NavBar}>
          <h4 className={styles.header}>HealthLogix Dashboard</h4>
          <ul>
            <li onClick={closeMobileMenu}>
              <span onClick={() => navigate("/LandingPage")}> Home</span>
            </li>

            <li onClick={closeMobileMenu}>
              <span onClick={() => navigate("/patientTable")}>Surgeries</span>
            </li>
            <li onClick={closeMobileMenu}>
              <span onClick={handleLogout}>Logout</span>
            </li>
            <li onClick={closeMobileMenu}>
              <span onClick={() => navigate("/")}>
                {" "}
                <IoPersonSharp size={20} />
              </span>
            </li>
          </ul>
        </div>
        <ToastContainer />
      </nav>
    </>
  );
}
export default NavBar;
