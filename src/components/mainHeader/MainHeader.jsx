import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={styles.container}>
      <a href="#">About</a>
      <a href="#">Projects</a>
      <a href="#">Studio</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </div>
  );
};

export default MainHeader;
