import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseMenu from "../assets/close.svg";
import MenuIcon from "../assets/menu.svg";
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

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className={styles.NavBar}>
        <h4 className={styles.header}>HealthLogix Dashboard</h4>
        <ul className={`${styles.navOptions} ${click ? styles.active : ""}`}>
          <li>
            <span
              onClick={() => {
                navigate("/LandingPage");
                closeMobileMenu();
              }}
            >
              {" "}
              Home
            </span>
          </li>

          <li>
            <span
              onClick={() => {
                navigate("/patientTable");
                closeMobileMenu();
              }}
            >
              Surgeries
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                handleLogout();
                closeMobileMenu();
              }}
            >
              Logout
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                handleLogout();
              }}
            >
              {" "}
              <IoPersonSharp size={20} />
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.mobileMenu} onClick={handleClick}>
        <h4 className={styles.heading}>HealthLogix Dashboard</h4>
        <img
          src={click ? CloseMenu : MenuIcon}
          alt="menu"
          className={styles.menuIcon}
        />
      </div>
      <ToastContainer />
    </>
  );
}
export default NavBar;
