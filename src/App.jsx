import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experiences/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
