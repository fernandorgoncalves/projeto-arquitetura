
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ProjectsList from "../components/ProjectsList/ProjectsList";


function Home() {
    return(
        <>
        <Header />
        <div className="container">
            <Hero/>
            <ProjectsList />
        </div>
        <Footer/>
        </>
    )
}
export default Home;