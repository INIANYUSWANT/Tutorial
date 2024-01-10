import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import AboutImg from "../assets/Home.jpg";

function About() {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero-mid"
      heroImg={AboutImg}
      title="About"
      btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
