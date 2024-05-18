import styles from "./Hero.module.css";
import landingImage from "../../assets/landingImages/landingPage.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <img src={landingImage} alt="landing-page-image" />
      <div className={styles.detailsSection}>
        <p className={styles.title}>Get Personalised home interiors</p>
        <p className={styles.subTitle}>in just 50 days</p>
        <button className={styles.button}>
          SPEAK WITH AN ONLINE CONSULTANT
        </button>
      </div>
    </div>
  );
};

export default Hero;
