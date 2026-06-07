import { Link, NavLink } from "react-router-dom";
export default function Footer(){
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>Department</h3>
          <p>
            The Department of Computer Applications focuses on delivering 
            quality education in software development, AI, and modern technologies.
          </p>
        </div>


        <div className="footer-section">
          <h3>Quick Links</h3>
           <NavLink className={"footer-link"} to="/">Home</NavLink>
           <br />
                  <NavLink className={"footer-link"} to="/about">About</NavLink>
                  <br />
                  <NavLink className={"footer-link"} to="/events">Events</NavLink>
                  <br />
                  <NavLink className={"footer-link"} to="/gallery">Gallery</NavLink>
                  <br />
                  <NavLink  to="/contact" className={"footer-link"}>Contact</NavLink>
        </div>


        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: dept@example.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Bangalore, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Department Website | All Rights Reserved
      </div>

    </footer>
  );
}