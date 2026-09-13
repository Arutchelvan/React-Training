import { NavLink } from "react-router";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <div className={styles.nav}>
      <ul><li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li></ul>
      
      
      
    </div>
  );
}

export default PageNav;
