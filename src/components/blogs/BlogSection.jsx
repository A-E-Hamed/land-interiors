import Carousel from "../carousel/Carousel";
import styles from "./BlogSection.module.css";
import { Button } from "@mui/material";

const BlogSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>Blogs</p>
      <Carousel />
      <div className={styles.footer}>
        <Button className={styles.button}>View all</Button>
      </div>
    </div>
  );
};

export default BlogSection;
