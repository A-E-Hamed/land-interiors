import styles from "./TopHeader.module.css";
import logo from ".././../assets/logos/logo.png";

const TopHeader = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <div className={styles.navLinks}>
        <p>Join as Design Expert</p>
        <p>Partner with LAND interiors</p>
      </div>
    </div>
  );
};

export default TopHeader;
