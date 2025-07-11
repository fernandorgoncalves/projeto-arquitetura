import AboutText from "../components/AboutText/AboutText";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function About() {
    return(
        <>
      <Header />
      <Banner title="About" image="about.svg" />
      <div className="container">
        <AboutText/>
      </div>
      <Footer />
        </>
    )
}
export default About;