import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import { useContext } from "react";
//CONTEXT
import { AppContext } from "../context/AppContext";

function Projects() {
  const appContext = useContext(AppContext);
  return (
    <>
      <Header />
      <Banner
        title={appContext.languages[appContext.language].menu.projects}
        image="projects.svg"
      />
      <div className="container">
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}
export default Projects;
