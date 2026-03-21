import { IoCartSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
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
          <li>
            <img
              src={loginImage}
              alt="Background"
              width={100}
              height={60}
              onClick={() => navigate("/")}
            />
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/landingPage")}> Home</span>
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/")}>Login</span>
          </li>

          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/dashboard")}>dashboard</span>
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
