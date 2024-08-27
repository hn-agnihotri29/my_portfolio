import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experiences/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
