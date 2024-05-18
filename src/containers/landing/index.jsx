import AboutUs from "../../components/aboutUs/AboutUs";
import BlogSection from "../../components/blogs/BlogSection";
import FooterSection from "../../components/footerSection/FooterSection";
import HeaderSection from "../../components/headerSection/HeaderSection";
import Hero from "../../components/hero/Hero";
import ServicesSection from "../../components/services/ServicesSection";

const Landing = () => {
  return (
    <div>
      <HeaderSection />
      <Hero />
      <AboutUs />
      <ServicesSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default Landing;
