import "./LandingPage.css";
import NavBar from "../NavBar/NavBar";
import About from "../About/About"
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

export default function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
