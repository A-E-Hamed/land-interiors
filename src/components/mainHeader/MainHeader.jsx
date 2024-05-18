import styles from "./MainHeader.module.css"

const MainHeader = () => {
  return (
    <div className={styles.container}>
      <p>About</p>
      <p>Projects</p>
      <p>Studio</p>
      <p>Blog</p>
      <p>Contact</p>
    </div>
  );
};

export default MainHeader;
