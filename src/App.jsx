import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experiences/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
