import styles from "./TopHeader.module.css";
import logo from "/logos/logo.png";

const TopHeader = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <div className={styles.navLinks}>
        <a href="#">Join as Design Expert</a>
        <a href="#">Partner with LAND interiors</a>
      </div>
    </div>
  );
};

export default TopHeader;
