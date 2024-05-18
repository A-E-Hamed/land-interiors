import React from 'react';
import { Grid } from '@mui/material';
import styles from "./AboutUs.module.css";
import calendar from "../../assets/aboutIcons/calendar.png";
import home from "../../assets/aboutIcons/home.png";
import certificate from "../../assets/aboutIcons/certificate.png";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>Why LAND Interiors</p>
      <Grid container spacing={2} className={styles.iconsSection}>
        <Grid item xs={12} sm={4}>
          <div className={styles.aboutElement}>
            <img src={calendar} alt="calendar" />
            <p>50 days or we pay you rent</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={styles.aboutElement}>
            <img src={home} alt="home" />
            <p>1500+ happy customers</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={styles.aboutElement}>
            <img src={certificate} alt="certificate" />
            <p>300+ design experts</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
