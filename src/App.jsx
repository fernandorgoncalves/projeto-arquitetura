import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

//UTILS
import ScrollToTop from "./utils/ScrollToTop";

function App() {
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
