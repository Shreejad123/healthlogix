import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/hospitalLogo.png";

import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className={styles.header}>
        <div onClick={handleClick}></div>
        <ul>
          <img
            src={loginImage}
            alt="Background"
            width={100}
            height={100}
            onClick={() => navigate("/")}
            className={styles.image}
          />

          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/")}> Home</span>
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/login")}>Login</span>
          </li>

          <li onClick={closeMobileMenu}>
            <span>Add Patient</span>
          </li>
          <li onClick={closeMobileMenu}>
            <button className="btn btn-danger">Sign up</button>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
