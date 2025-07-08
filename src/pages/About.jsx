import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function About() {
    return(
        <>
        <Header />
        <h1>About</h1>
        <p>Subtitle</p>
        <Banner title="About" image="about.svg" />
        <Footer/>
        </>
    )
}
export default About;