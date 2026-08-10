import { NavLink } from "react-router-dom";

function Navbar({ theme, onToggleTheme }) {
  const navClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header>
      <nav className="navbar" aria-label="Primary navigation">
        <NavLink className="logo" to="/Home">
          Amrita <span>Srikantam</span>
        </NavLink>

        <div className="nav-right">
          <ul className="nav-links">
            <li><NavLink className={navClass} to="/Home">HOME</NavLink></li>
            <li><NavLink className={navClass} to="/about">ABOUT</NavLink></li>
            <li><NavLink className={navClass} to="/projects">PROJECTS</NavLink></li>
            <li><NavLink className={navClass} to="/contact">CONTACT</NavLink></li>
          </ul>

          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;