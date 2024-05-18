import React from "react";
import Footer from "../footer/Footer";
import MainHeader from "../mainHeader/MainHeader";
import MediaBar from "../socialMediaBar/MediaBar";
import styles from "./FooterSection.module.css";
import useWindowWidth from "../../utils/hooks/UseWindowWidth";
import footerLogo from "../../assets/logos/footerLogo.png";

const FooterSection = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.container}>
      {windowWidth < 960 ? (
        <div className={styles.innerContainer}>
          <img src={footerLogo} alt="footer-logo" />
          <div>
            <p>landinteriors@gmail.com</p>
            <p>+91 98987 65656</p>
          </div>
          <div className={styles.footerSocial}>
            <MediaBar />
          </div>
        </div>
      ) : (
        <div className={styles.innerContainer}>
          <Footer />
          <div className={styles.footerNav}>
            <MainHeader />
          </div>
          <div className={styles.footerSocial}>
            <MediaBar />
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterSection;
