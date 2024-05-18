import React from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogData from "../../assets/constance/BlogData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useWindowWidth from "../../utils/hooks/UseWindowWidth";

const Carousel = () => {
  const windowWidth = useWindowWidth();

  const slidesToShow = windowWidth < 960 ? 2.5 : 4.5;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true, 
    centerPadding: "0", 
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIosIcon
        className={`${className}`}
        style={{
          ...style,
          display: "block",
          color: "black",
          right: "20px",
          top: "35%",
          width: "35px",
          height: "35px",
          zIndex: 1,
          backgroundColor: "white",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIosNewIcon
        className={`${className}`}
        style={{
          ...style,
          display: "block",
          color: "black",
          left: "20px",
          top: "35%",
          width: "35px",
          height: "35px",
          zIndex: 1,
          backgroundColor: "white",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {blogData.map((item) => (
          <div key={item.id} className={styles.imageContainer}>
            <img src={item.imagePath} alt={item.title} />
            <div className={styles.elementDetails}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
