import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../components/Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <Logo />
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
