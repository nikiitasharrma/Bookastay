import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Bookastay</span>
        </Link>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar