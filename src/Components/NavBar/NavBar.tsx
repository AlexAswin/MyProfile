import { useState } from "react";
import './NavBar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const Name: string = 'Alex Aswin'

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {Name}
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <form className={`${!isOpen ? "open" : "close"}`}>
          <a className="navbar-brand" href="#">
            Home
          </a>
          <a className="navbar-brand" href="#">
            About
          </a>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;