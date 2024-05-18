import styles from "./Footer.module.css";
import footerLogo from "../../assets/logos/footerLogo.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerSection}>
        <img src={footerLogo} alt="footer-logo" />
        <p>
          We introduce our selves as LAND Interior and Architectural Design
          Consultancy – one of the best interior designers in Chennai. Chennai
          Luxury Interior and Architectural Design Consultancy has challenged
          the conventional way of interior designing and given new dimensions to
          the art of interior designing.
        </p>
      </div>
      <div className={styles.rightSection}>
        <div>
          <p>WHAT WE DO</p>
          <ul>
            <li>Interior Design </li>
            <li>Kitchen</li>
            <li>Ceiling</li>
            <li>Bedroom</li>
            <li>Smart Home</li>
          </ul>
        </div>
        <div>
          <p>Get in touch</p>
          <p>landinteriors@gmail.com</p>
          <p>+91 98987 65656</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
