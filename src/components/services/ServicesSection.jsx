import React from "react";
import styles from "./ServicesSection.module.css";
import { Grid } from "@mui/material";
import servicesData from "../../assets/constance/ServicesData";



const ServicesSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>What we do?</p>
      <Grid container  className="serviceContainer">
        {servicesData.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id} className={styles.element}>
            <div className={styles.serviceItem}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.image}
              />
              <p>{service.title}</p>
            </div>
          </Grid>
        ))}
      </Grid>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla
      </p>
    </div>
  );
};

export default ServicesSection;
