import { Link } from "react-router-dom";

export default function Navbar({ toggleTheme }) {
  return (
    <nav className="nav">


      <h2 className="logo">Dept<span>.</span></h2>


      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/achievements">Achievements</Link>

        <button onClick={toggleTheme} className="theme-btn">
          🌙
        </button>
      </div>

    </nav>
  );
}