import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="container mx-auto">
      <NavLink
        to="/"
        className={({ isActive }) => `btn ${isActive ? "btn-primary" : ""}`}
      >
        <button>Practice</button>
      </NavLink>

      <NavLink
        to="/items"
        className={({ isActive }) => `btn ${isActive ? "btn-primary" : ""}`}
      >
        <button>Items</button>
      </NavLink>

      <NavLink
        to="/routines"
        className={({ isActive }) => `btn ${isActive ? "btn-primary" : ""}`}
      >
        <button>Routines</button>
      </NavLink>
      <NavLink
        to="/stats"
        className={({ isActive }) => `btn ${isActive ? "btn-primary" : ""}`}
      >
        <button>Stats</button>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => `btn ${isActive ? "btn-primary" : ""}`}
      >
        <button>About</button>
      </NavLink>
    </header>
  );
};

export default Header;
