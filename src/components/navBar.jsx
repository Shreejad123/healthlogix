import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";

import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
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
              <span onClick={() => navigate("/SurgeryTable")}>Patients</span>
            </li>

            <li onClick={closeMobileMenu}>
              <span onClick={() => navigate("/SurgeryTable")}>Surgeries</span>
            </li>
            <li onClick={closeMobileMenu}>
              <span onClick={() => navigate("/")}>
                {" "}
                <IoPersonSharp size={20} />
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
