import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./MediaBar.module.css";

const MediaBar = () => {
  return (
    <div className={styles.container}>
      <FacebookIcon />
      <LinkedInIcon />
      <TwitterIcon />
      <YouTubeIcon />
      <InstagramIcon />
    </div>
  );
};

export default MediaBar;
