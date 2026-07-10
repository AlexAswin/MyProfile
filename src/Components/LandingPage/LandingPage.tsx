import "./LandingPage.css";
import NavBar from "../NavBar/NavBar";
import About from "../About/About"
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

export default function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
