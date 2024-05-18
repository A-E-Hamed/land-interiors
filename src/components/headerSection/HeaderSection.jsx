import MainHeader from "../mainHeader/MainHeader";
import TopHeader from "../topHeader/TopHeader";
import useWindowWidth from "../../utils/hooks/UseWindowWidth";
import MobileHeader from "../mobileHeader/MobileHeader";
import styles from "./HeaderSection.module.css";
const HeaderSection = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.container}>
      {windowWidth <= 960 ? (
        <MobileHeader />
      ) : (
        <div className={styles.container}>
          <TopHeader />
          <MainHeader />
        </div>
      )}
    </div>
  );
};

export default HeaderSection;
