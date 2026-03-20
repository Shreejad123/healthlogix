import { IoCartSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

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
            <span className={styles.shopEase} onClick={() => navigate("/")}>
              <IoCartSharp size={25} />
              &nbsp;Hospital Mangement System
            </span>
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/")}>
              <FaHome className={styles.icons} size={25} />
              &nbsp; Home
            </span>
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/login")}>
              <IoPersonSharp size={22} className={styles.icons} /> &nbsp; Login
            </span>
          </li>

          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/cart")}>
              <IoCartSharp size={22} className={styles.icons} />
              &nbsp; dashboard
            </span>
          </li>
          <li onClick={closeMobileMenu}>
            <span onClick={() => navigate("/Wishlist")}>
              <FaRegHeart size={20} className={styles.icons} />
              &nbsp;Wishlist
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
