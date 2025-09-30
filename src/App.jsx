import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useContext } from "react";



//UTILS
import ScrollToTop from "./utils/ScrollToTop";
import { AppContext } from "./context/AppContext";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const appContext = useContext(AppContext)
  if(appContext.loading){
    return <LoadingSpinner/>
  }
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/about"
          element={
            <>
              <About />
              <Link to={"/"}>Navegar</Link>
            </>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <>
              <Projects />
            </>
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <>
              <Contact />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
