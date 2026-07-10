import "./LandingPage.css";
import NavBar from "../NavBar/NavBar";
import About from "../About/About"

export default function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <About />
      </div>
    </>
  );
}
